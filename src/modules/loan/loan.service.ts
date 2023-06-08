import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateLoansProcess, LoanWithAdditionalData } from './types';
import { Loan, LoanState } from '@prisma/client';
import { PaymentScheduleService } from '../payment-schedule/payment-schedule.service';
import { Decimal } from '@prisma/client/runtime';

@Injectable()
export class LoanService {
  constructor(
    private readonly _db: PrismaService,
    private readonly _paymentScheduleService: PaymentScheduleService
  ) { }

  async createLoansProcess(loansData: CreateLoansProcess[]): Promise<any[]> {
    const dbActions = [];
    const results = []
    for (const data of loansData) {
      const { contractId, loanTypeId, signDate, grantorId, renovatedFromId } = data;
      const amountGived: Number = Number(data.amountGived);
      const contract = await this._db.contract.findFirstOrThrow({ where: { id: contractId }, include:{contractType:true} });
      const previousLoan = await this.findPreviousLoan(renovatedFromId);
      const loanType = await await this._db.loantype.findFirstOrThrow({ where: { id: loanTypeId } });
      const amountToPay = this.calculateAmountToPay(Number(amountGived), previousLoan, loanType.rate, contract.contractType.amount);
      data.firstPaymentDate = data.firstPaymentDate instanceof Date ? data.firstPaymentDate : new Date(data.firstPaymentDate);
      // Extract the first payment date from the input data
      const { firstPaymentDate, ...cleanedData } = data;
      /* let nextDate;
      if (!(cleanedData.finishedDate instanceof Date)) 
        nextDate = new Date(cleanedData.finishedDate); */
      const weeklyPayment = this.calculateWeeklyPayment(amountToPay, loanType.weekDuration);
      const baseProfitAmount = this.calculateBaseProfitAmount(Number(amountGived), previousLoan, loanType.rate);
      const loan = this.createLoan(
        signDate,
        loanTypeId,
        grantorId, 
        contractId,
        Number(amountGived),
        amountToPay,
        weeklyPayment,
        baseProfitAmount,
        previousLoan,
      );
      dbActions.push(loan);
    }
    let transactionresult
    try {
      transactionresult = await this._db.$transaction(dbActions);
    } catch (error) {
      console.error(error);
    }
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

  private async findPreviousLoan(renovatedFromId: string | undefined): Promise<Loan | undefined> {
    if (!renovatedFromId) {
      return undefined;
    }
    const previousLoan = await this._db.loan.findUnique({
      where: {
        id: renovatedFromId
      }
    });
    if (!previousLoan) {
      throw new Error('Invalid renovatedFromId');
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
    if (Number(contractMaxAmount) < amountToPay) {
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
    signDate: Date | string,
    loanTypeId: string,
    grantorId: string,
    contractId: string,
    amountGived: number,
    amountToPay: number,
    weeklyPaymentAmount: number,
    baseProfitAmount: number,
    previousLoan: Loan | undefined,
  ): Promise<Loan> {
    const signDateObj = signDate instanceof Date ? signDate : new Date(signDate);
    return this._db.loan.create({
      data: {
        signDate: signDateObj,
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
        renovatedFromId: previousLoan ? previousLoan.id : undefined
      },
      include: {
        loanType: true,
      }
    });
  }
}