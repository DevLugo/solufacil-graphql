import { Injectable } from '@nestjs/common';
import { LoanWhereInput } from '../../@generated/loan/loan-where.input';
import { LoanCreateInput } from '../../@generated/loan/loan-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';
import { LoanPaymentService } from './loan-payment/loan-payment.service';
import { CustomCreateLoanInput } from './CustomCreateLoanInput';
import { PaymentScheduleService } from './payment-schedule/payment-schedule.service';
import { LoanState } from '../../@generated/prisma/loan-state.enum';
import { Contract, ContractType, Employee, Loan, Loantype, PaymentSchedule, PaymentState, Prisma, PrismaClient, User } from '@prisma/client';
import { UtilsService } from './utils.service';
import { Decimal } from '@prisma/client/runtime';
export type LoanWithAdditionalData = Loan & {
  employee: Employee & {
    user: User;
  };
  paymentSchedule: PaymentSchedule[];
};
export type CustomCreateLoanInputWithoutWeeklyPaymentAmount = Omit<CustomCreateLoanInput, 'weeklyPaymentAmount'>;

@Injectable()
export class LoanService {
  constructor(
    private readonly db: PrismaService,
    private readonly loanPaymentService: LoanPaymentService,
    private readonly paymentScheduleService: PaymentScheduleService,
    private readonly utilsService: UtilsService
  ) { }

  async getMany(where: LoanWhereInput) {
    return await this.db.loan.findMany({
      where,
      include: {
        payments: {
          include: {
            employee: true
          }
        },
        employee: {
          include: {
            user: true,
          }
        },
      }
    });
  }
  async get(id: string) {
    return await this.db.loan.findUnique({
      where: { id },
      include: {
        payments: {
          include: {
            employee: true
          }
        },
        employee: {
          include: {
            user: true,
          }
        },
      }
    });
  }
  async createLoansProcess(loansData: CustomCreateLoanInput[]): Promise<LoanWithAdditionalData[]> {
    const dbActions = [];
    const results =[]
    for (const data of loansData) {
      const amountGived: Number = Number(data.amountGived);
      const contract = await this.findContract(data.contract.connect.id);
      const previousLoan = await this.findPreviousLoan(data.renovatedFromId);
      const loanType = await this.findLoanType(data.loanType.connect.id);
      const amountToPay = this.calculateAmountToPay(Number(amountGived), previousLoan, loanType, contract);
      data.firstPaymentDate = data.firstPaymentDate instanceof Date ? data.firstPaymentDate : new Date(data.firstPaymentDate);
      // Extract the first payment date from the input data
      const { firstPaymentDate, ...cleanedData } = data;
      let nextDate;
      if (!(cleanedData.finishedDate instanceof Date)) 
        nextDate = new Date(cleanedData.finishedDate);
      const weeklyPayment = this.calculateWeeklyPayment(amountToPay, loanType.weekDuration);
      const baseProfitAmount = this.calculateBaseProfitAmount(Number(amountGived), previousLoan, loanType.rate);
      const loan = this.createLoan(
        {
          ...data, 
          weeklyPaymentAmount: new Decimal(weeklyPayment)
        },
        Number(amountGived),
        amountToPay,
        weeklyPayment,
        baseProfitAmount,
        previousLoan,
        data.renovatedFromId
      );
      dbActions.push(loan);
    }
    let transactionresult
    try{
      transactionresult = await this.db.$transaction(dbActions);
    } catch (error) {
      console.error(error);
    }
    let idx = 0;

    for (const loan of transactionresult) {
      try {
        console.log(loan.loanType)
        await this.paymentScheduleService.createPaymentSchedule(loansData[idx].firstPaymentDate! as Date, loan.loanType.weekDuration, loan.id);
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

  private async findContract(contractId: string): Promise<Contract & { contractType: ContractType }> {
    return await this.db.contract.findFirst({
      where: {
        id: contractId
      },
      include: {
        contractType: true
      },
      rejectOnNotFound: true
    });
  }

  private async findPreviousLoan(renovatedFromId: string | undefined): Promise<Loan | undefined> {
    if (!renovatedFromId) {
      return undefined;
    }
    const previousLoan = await this.db.loan.findUnique({
      where: {
        id: renovatedFromId
      }
    });
    if (!previousLoan) {
      throw new Error('Invalid renovatedFromId');
    }
    return previousLoan;
  }

  private async findLoanType(loanTypeId: string): Promise<Loantype> {
    return await this.db.loantype.findFirst({
      where: {
        id: loanTypeId
      },
      rejectOnNotFound: true
    });
  }

  private calculateAmountToPay(amountGived: number, previousLoan: Loan | undefined, loanType: Loantype, contract: Contract & { contractType: ContractType }): number {
    let renovationPendingAmount = 0;
    let amountToPay = Number(amountGived) as number;
    if (previousLoan) {
      renovationPendingAmount = Number(previousLoan.pendingAmount);
      amountToPay = (Number(amountGived) + Number(previousLoan.pendingAmount)) as number;
    }
    amountToPay = (+amountToPay * (1 + loanType.rate)) as number;
    if (Number(contract.contractType.amount) < amountToPay) {
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
  WEEK_SECONDS = 7 * 24 * 60 * 60 * 1000;

  async createPaymentSchedulee(firstDayPay: Date, weeksDuration: number, loanId: string) {
    let i = 0;
    if (firstDayPay instanceof Date) {
      firstDayPay;
    } else {
      firstDayPay = new Date(firstDayPay);
    }
    const weekSeconds = this.WEEK_SECONDS;
    const loan = await this.db.loan.findUnique(
      {
        where: { id: loanId },
        include: { loanType: true }
      });
    let nextDateToPay: Date = firstDayPay;
    const transactions = [];
    while (i < weeksDuration) {
      nextDateToPay = new Date(nextDateToPay.getTime() + weekSeconds);
      const percentegeToPaid = this.utilsService.calculatePayedPercentege(+loan.weeklyPaymentAmount, +loan.amountToPay);
      const profit = this.utilsService.getPercentageOf(percentegeToPaid, Number(loan.totalProfitAmount));

      transactions.push(
        this.db.paymentSchedule.create({
          data: {
            amountToPay: loan.weeklyPaymentAmount,
            dueDate: nextDateToPay,
            paidAmount: 0,
            numeration: i + 1,
            status: PaymentState.PENDING,
            profit: +profit,
            returnToCapital: +loan.weeklyPaymentAmount - Number(profit),
            loan: {
              connect: { id: loan.id }
            }
          }
        })
      )
      i++;
    }
    return transactions;
  }
  private createLoan(
    cleanedData: Omit<CustomCreateLoanInput, 'firstPaymentDate'>,
    amountGived: number,
    amountToPay: number,
    weeklyPayment: number,
    baseProfitAmount: number,
    previousLoan: Loan | undefined,
    renovatedFromId: string | undefined
  ) : Promise<Loan>{
    const signDate = cleanedData.signDate instanceof Date ? cleanedData.signDate : new Date(cleanedData.signDate);
    return this.db.loan.create({
      data: {
        //...cleanedData,
        loanType: cleanedData.loanType,
        signDate,
        employee: cleanedData.employee,
        contract: cleanedData.contract,
        amountGived: amountGived,
        status: LoanState.APPROVED,
        weeklyPaymentAmount: weeklyPayment,
        amountToPay: amountToPay,
        pendingAmount: amountToPay,
        baseProfitAmount: baseProfitAmount,
        renovationPendingAmount: previousLoan ? Number(previousLoan.pendingAmount) : 0,
        renovationProfitAmount: previousLoan ? (+previousLoan.pendingAmount * 100 / +previousLoan.amountToPay) * baseProfitAmount / 100 : 0,
        totalProfitAmount: previousLoan ? (+previousLoan.pendingAmount * 100 / +previousLoan.amountToPay) * baseProfitAmount / 100 + baseProfitAmount : baseProfitAmount,
        renovatedFromId: renovatedFromId ? renovatedFromId : undefined
      },
      include: {
        loanType: true,
      }
    });
  }

  private async createPaymentSchedule(firstPaymentDate: Date, weekDuration: number, loanId: string): Promise<void> {
    await this.paymentScheduleService.createPaymentSchedule(firstPaymentDate, weekDuration, loanId);
  }

  private async findLoanWithAdditionalData(loanId: string): Promise<LoanWithAdditionalData> {
    return await this.db.loan.findUnique({
      where: { id: loanId },
      include: {
        paymentSchedule: true,
        employee: {
          include: { user: true }
        }
      }
    });
  }
}
   