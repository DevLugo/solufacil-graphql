import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateLoansProcess, LoanWithAdditionalData } from './types';
import { Account, Loan, LoanState, Prisma, TransactionExpenseSource, TransactionType } from '@prisma/client';
import { PaymentScheduleService } from '../payment-schedule/payment-schedule.service';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class LoanService {
  constructor(
    private readonly _db: PrismaService,
    private readonly _paymentScheduleService: PaymentScheduleService
  ) { }

  async createLoansProcess(loansData: CreateLoansProcess[]): Promise<LoanWithAdditionalData[]> {
    const dbActions = [];
    const results: LoanWithAdditionalData[] = []
    console.log("==================================== createLoansProcess/////", loansData)
    for (const data of loansData) {
      const { contractId, loanTypeId, signDate, grantorId, borrowerId, isRenovation } = data;
      console.log("==================================== createLoansProcess 1", contractId)
      const amountGived: Number = Number(data.amountGived);
      const contract = await this._db.contract.findFirstOrThrow({ where: { id: contractId }, include: { contractType: true } });
      let previousLoan;
      if (isRenovation) {
        previousLoan = await this.findPreviousLoan(contractId);
      }
      const loanType = await await this._db.loantype.findFirstOrThrow({ where: { id: loanTypeId } });
      const amountToPay = this.calculateAmountToPay(Number(amountGived), previousLoan, loanType.rate, contract.contractType.amount);
      data.firstPaymentDate = data.firstPaymentDate instanceof Date ? data.firstPaymentDate : new Date(data.firstPaymentDate);
      // Extract the first payment date from the input data
      const { firstPaymentDate, ..._ } = data;
      /* let nextDate;
      if (!(cleanedData.finishedDate instanceof Date)) 
        nextDate = new Date(cleanedData.finishedDate); */
      const weeklyPayment = this.calculateWeeklyPayment(amountToPay, loanType.weekDuration);
      const baseProfitAmount = this.calculateBaseProfitAmount(Number(amountGived), previousLoan, loanType.rate);
      console.log("====================================", signDate)

      const sourceAccount = await this._db.account.findFirst({
        where: {
          type: "EMPLOYEE_CASH_FUND",
          managers: { some: { id: grantorId } },
        },
      });
  
      if (!sourceAccount) throw new Error('No se encontro la cuenta de caja del empleado');
  

      const loan = this.createLoan(
        signDate as Date,
        loanTypeId,
        grantorId,
        contractId,
        Number(amountGived),
        amountToPay,
        weeklyPayment,
        baseProfitAmount,
        previousLoan,
        sourceAccount
      );
      console.log("Result of createLoan:", loan);

      dbActions.push(loan);
    }
    console.log("despues del for, antes del transaction", dbActions);

    // Log the type of each element in dbActions
    dbActions.forEach((action, index) => {
      console.log(`Type of dbActions[${index}]:`, typeof action);
      console.log(`Is dbActions[${index}] a Promise:`, action instanceof Promise);
      console.log(`Content of dbActions[${index}]:`, action);
    });
    let transactionresult;
    try {
      transactionresult = await this._db.$transaction(dbActions);
    } catch (error) {
      console.log("ERRRRRRRROR");
      console.error(error);
      throw new Error('Error al crear el credito.');
    }
    console.log("elefantito???????", transactionresult);

    let idx = 0;

    for (const loan of transactionresult) {
      try {
        await this._paymentScheduleService.createPaymentSchedule(loansData[idx].firstPaymentDate! as Date, loan.loanType.weekDuration, loan.id);
        const loanWithAdditionalData = await this.findLoanWithAdditionalData(loan.id);
        results.push(loanWithAdditionalData);
      } catch (error) {
        const errorMessage = `Failed to create payment schedule for loan ${loan.id}: ${error.message}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      idx++
    }
    return results;
  }

  private async findLoanWithAdditionalData(loanId: string): Promise<LoanWithAdditionalData> {
    return await this._db.loan.findUnique({
      where: { id: loanId },
      include: {
        paymentSchedule: true,
        grantor: {
          include: { user: true }
        }
      }
    });
  }

  private async findPreviousLoan(contractId: string): Promise<Loan | undefined> {

    const previousLoan = await this._db.loan.findFirst({
      where: {
        contractId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    console.log("previousLoan,==============================", contractId, previousLoan)
    if (!previousLoan) {
      //thhrow and error about the contract id dont have a previous loan
      throw new Error('El contrato no tiene un credito previo');

    }
    return previousLoan;
  }

  private calculateAmountToPay(amountGived: number, previousLoan: Loan | undefined, loanRate: number, contractMaxAmount: Decimal): number {
    let renovationPendingAmount = 0;
    let amountToPay = Number(amountGived) as number;
    if (previousLoan) {
      renovationPendingAmount = Number(previousLoan.pendingAmount);
      amountToPay = (Number(amountGived) + Number(previousLoan.pendingAmount)) as number;
    }
    amountToPay = (+amountToPay * (1 + loanRate)) as number;
    console.log("previousLoan,==============================", previousLoan, amountToPay)
    if (Number(contractMaxAmount) < amountToPay) {
      //throw an error and show the contractMaxAmount and the amount to pay

      throw new Error('La cantidad solicitada es mayor a la otorgada en el contrato: TODO: validar que solo tenga un credito activo a la vez');
    }
    return amountToPay;
  }

  private calculateWeeklyPayment(amountToPay: number, weekDuration: number): number {
    return amountToPay / weekDuration;
  }

  private calculateBaseProfitAmount(amountGived: number, previousLoan: Loan | undefined, rate: number): number {
    let renovationPendingAmount = 0;
    if (previousLoan) {
      renovationPendingAmount = Number(previousLoan.pendingAmount);
    }
    return (Number(amountGived) + Number(renovationPendingAmount)) * rate;
  }

  private createLoan(
    signDate: Date,
    loanTypeId: string,
    grantorId: string,
    contractId: string,
    amountGived: number,
    amountToPay: number,
    weeklyPaymentAmount: number,
    baseProfitAmount: number,
    previousLoan: Loan | undefined,
    sourceAccount: Account,
  ){
        return this._db.loan.create({
          data: {
            signDate,
            loanType: { connect: { id: loanTypeId } },
            grantor: { connect: { id: grantorId } },
            contract: { connect: { id: contractId } },
            amountGived: amountGived,
            status: LoanState.APPROVED,
            firstPaymentDate: new Date(),
            weeklyPaymentAmount,
            amountToPay,
            pendingAmount: amountToPay,
            baseProfitAmount,
            renovationPendingAmount: previousLoan ? Number(previousLoan.pendingAmount) : 0,
            renovationProfitAmount: previousLoan ? (+previousLoan.pendingAmount * 100 / +previousLoan.amountToPay) * baseProfitAmount / 100 : 0,
            totalProfitAmount: previousLoan ? (+previousLoan.pendingAmount * 100 / +previousLoan.amountToPay) * baseProfitAmount / 100 + baseProfitAmount : baseProfitAmount,
            renovatedFromId: previousLoan ? previousLoan.id : undefined,
            transaction: {
              create: {
                amount: amountGived,
                type: TransactionType.EXPENSE,
                state: LoanState.APPROVED,
                expenseSource: TransactionExpenseSource.LOAN_GRANTED_COMISSION, // TODO: update to LOAN_GRANTED
                sourceAccount: { connect: { id: sourceAccount.id } },
              }
            }

          },
          include: {
            loanType: true,
          }
        });
    }
}