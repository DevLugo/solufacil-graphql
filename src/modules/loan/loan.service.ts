import { Injectable } from '@nestjs/common';
import { LoanWhereInput } from '../../@generated/loan/loan-where.input';
import { LoanCreateInput } from '../../@generated/loan/loan-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';
import { LoanPaymentService } from './loan-payment/loan-payment.service';
import { CustomCreateLoanInput } from './CustomCreateLoanInput';
import { PaymentScheduleService } from './payment-schedule/payment-schedule.service';
import { LoanState } from '../../@generated/prisma/loan-state.enum';
import { Contract, ContractType, Loan, Loantype } from '@prisma/client';
import { UtilsService } from './utils.service';
import { LoanCreateManyInput } from 'src/@generated/loan/loan-create-many.input';

@Injectable()
export class LoanService {
    constructor(
        private readonly db:PrismaService,
        private readonly loanPaymentService: LoanPaymentService,
        private readonly paymentScheduleService: PaymentScheduleService,
        private readonly utilsService: UtilsService
    ){}

    async getMany(where: LoanWhereInput){
        return await this.db.loan.findMany({
            where,
            include: {
            payments: {
                include: {
                    employee:true
                }
            },
            employee: {
                include: {
                    user: true,
                }    
            },
        }});
    }
    async get(id: string){
        return await this.db.loan.findUnique({
            where:{id},
            include: {
                payments: {
                    include: {
                        employee:true
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
    //==========
    async createLoanProccess(data: CustomCreateLoanInput): Promise<Loan> {
        const amountGived: Number = Number(data.amountGived);
        const contract = await this.findContract(data.contract.connect.id);
        contract.contractType.amount
        const previousLoan = await this.findPreviousLoan(data.renovatedFromId);
        const loanType = await this.findLoanType(data.loanType.connect.id);
        const amountToPay = this.calculateAmountToPay(Number(amountGived), previousLoan, loanType, contract);
        // Extract the first payment date from the input data
        const { firstPaymentDate, ...cleanedData } = data;
        data.finishedDate;
        cleanedData.finishedDate
        
        const weeklyPayment = this.calculateWeeklyPayment(amountToPay, loanType.weekDuration);
        const baseProfitAmount = this.calculateBaseProfitAmount(Number(amountGived), previousLoan, loanType.rate);
        const loan = await this.createLoan(data, Number(amountGived), amountToPay, weeklyPayment, baseProfitAmount, previousLoan, data.renovatedFromId);
        await this.createPaymentSchedule(new Date(data.firstPaymentDate), loanType.weekDuration, loan.id);
        return await this.findLoanWithAdditionalData(loan.id);
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
      
      private async createLoan(cleanedData: Omit<CustomCreateLoanInput, 'firstPaymentDate'>, amountGived: number, amountToPay: number, weeklyPayment: number, baseProfitAmount: number, previousLoan: Loan | undefined, renovatedFromId: string | undefined): Promise<Loan> {
        return await this.db.loan.create({
          data: {
            ...cleanedData,
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
          }
        });
      }
      
      private async createPaymentSchedule(firstPaymentDate: Date, weekDuration: number, loanId: string): Promise<void> {
        await this.paymentScheduleService.createPaymentSchedule(firstPaymentDate, weekDuration, loanId);
      }
      
      private async findLoanWithAdditionalData(loanId: string): Promise<Loan> {
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
//==========
    
    async create(data:LoanCreateInput){
        return await this.db.loan.create({data});
    }

    
    async createMany(data:LoanCreateManyInput){
        return await this.db.loan.createMany({data});
    }

    async latestLoanByBorrowerId(borrowerId:string){
        return await this.db.loan.findFirst({
            where:{
                status: "APPROVED",
                contract:{
                    borrowerId,
                },
            },
            orderBy: {
                createdAt: "desc"
            },
            include:{
                loanType:true
            }
        });
    }
}


/* 
async createLoanProccess(data: CustomCreateLoanInput[]): Promise<Loan[]> {
  const loans: Loan[] = [];

  await this.db.$transaction(async (prisma) => {
    for (const loanData of data) {
      // Find the contract associated with the loan
      const contract = await prisma.contract.findFirst({
        where: {
          id: loanData.contract.connect.id
        },
        include: {
          contractType: true
        },
        rejectOnNotFound: true
      });

      // Find the previous loan, if any
      let previousLoan: Loan | undefined;
      if (loanData.renovatedFromId) {
        previousLoan = await prisma.loan.findUnique({
          where: {
            id: loanData.renovatedFromId
          }
        });
        if (!previousLoan) {
          throw new Error('Invalid renovatedFromId');
        }
      }

      // Find the loan type associated with the loan
      const loanType = await prisma.loantype.findFirst({
        where: {
          id: loanData.loanType.connect.id
        },
        rejectOnNotFound: true
      });

      // Calculate values for a renovation loan
      let renovationPendingAmount = 0;
      let renovationAmountToPayPercentege = 0;
      let renovationProfitAmountToPay = 0;
      let amountToPay = Number(loanData.amountGived) as number;

      if (previousLoan) {
        renovationPendingAmount = Number(previousLoan.pendingAmount);
        renovationAmountToPayPercentege = (+previousLoan.pendingAmount * 100) / +previousLoan.amountToPay;
        renovationProfitAmountToPay = renovationAmountToPayPercentege * (+previousLoan.baseProfitAmount) / 100;
        amountToPay = (Number(loanData.amountGived) + Number(previousLoan.pendingAmount)) as number;
      }

      // Calculate the total amount to pay for the loan
      amountToPay = (+amountToPay * (1 + loanType.rate)) as number;

      // Check if the requested loan amount is greater than the amount in the contract
      if (Number(contract.contractType.amount) < amountToPay) {
        throw new Error('La cantidad solicitada es mayor a la otorgada en el contrato: TODO: validar que solo tenga un credito activo a la vez');
      }

      // Extract the first payment date from the input data
      const { firstPaymentDate, ...cleanedData } = loanData;

      // Calculate the weekly payment amount for the loan
      const weecklyPayment = amountToPay / loanType.weekDuration;

      // Calculate the base profit amount for the loan
      const baseProfitAmount = (Number(loanData.amountGived) + Number(renovationPendingAmount)) * loanType.rate;

      // Create the loan in the database
      const loan = await prisma.loan.create({
        data: {
          ...cleanedData,
          amountGived: loanData.amountGived,
          status: LoanState.APPROVED,
          weeklyPaymentAmount: weecklyPayment,
          amountToPay: amountToPay,
          pendingAmount: amountToPay,
          baseProfitAmount: baseProfitAmount,
          renovationPendingAmount,
          renovationProfitAmount: renovationProfitAmountToPay,
          totalProfitAmount: renovationProfitAmountToPay + baseProfitAmount,
          renovatedFromId: loanData.renovatedFromId || undefined
        }
      });

      // Create the payment schedule for the loan
      await this.paymentScheduleService.createPaymentSchedule(new Date(firstPaymentDate), loanType.weekDuration, loan.id);

      loans.push(loan);
    }
  });

  return loans;
}
 */