import { Injectable } from '@nestjs/common';
import { LoanWhereInput } from '../../@generated/loan/loan-where.input';
import { LoanCreateInput } from '../../@generated/loan/loan-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';
import { LoanPaymentService } from './loan-payment/loan-payment.service';
import { CustomCreateLoanInput } from './CustomCreateLoanInput';
import { PaymentScheduleService } from './payment-schedule/payment-schedule.service';
import { LoanState } from '../../@generated/prisma/loan-state.enum';
import { Loan } from '@prisma/client';
import { UtilsService } from './utils.service';

@Injectable()
export class LoanService {
    constructor(
        private readonly db:PrismaService,
        private readonly loanPaymentService: LoanPaymentService,
        private readonly paymentScheduleService: PaymentScheduleService,
        private readonly utilsService: UtilsService
        
        

    ){}

    async getMany(where: LoanWhereInput){
        return await this.db.loan.findMany({where});
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
                        user: true
                    }    
                },
            }
        });
    }

    async createLoanProccess(data:CustomCreateLoanInput){
        const contract = await this.db.contract.findFirst({
            where: {
                id:data.contract.connect.id
            },
            include: {
                contractType:true
            },
            rejectOnNotFound:true
        });

        let previousLoan: Loan;
        if (!!data.renovatedFromId) {
            previousLoan = await this.db.loan.findUnique({where: {id: data.renovatedFromId}});
        }
        if(!!data.renovatedFromId && !previousLoan)
            throw new Error('invalid renovatedFromId');


        const loanType = await this.db.loantype.findFirst({
            where: {id:data.loanType.connect.id},
            rejectOnNotFound:true
        }, );
        console.log(loanType, data.loanType.connect.id)
        let renovationPendingAmount:any = 0;
        let renovationAmountToPayPercentege = 0;
        let renovationProfitAmountToPay = 0;
        data.amountToPay = data.amountGived as any;
        if(previousLoan){
            renovationPendingAmount = previousLoan.pendingAmount;
            renovationAmountToPayPercentege = (+previousLoan.pendingAmount * 100)/+previousLoan.amountToPay;
            renovationProfitAmountToPay = renovationAmountToPayPercentege*(+previousLoan.baseProfitAmount)/100;
            data.amountToPay = (Number(data.amountGived) + Number(previousLoan.pendingAmount)) as any;
        }
        data.amountToPay = (+data.amountToPay * (1+loanType.rate)) as any;
        console.log("Dragon", data.amountToPay, loanType.rate)
        //TODO: Calcular el renovationprofit amount
        if (contract.contractType.amount < data.amountToPay){
            throw new Error('La cantidad solicitada es mayor a la otorgada en el contrato: TODO: validar que solo tenga un credito activo a la vez');
        }
        const {firstPaymentDate, ...cleanedData} = data;
        console.log("DRAKE", data.amountToPay, loanType.weekDuration);

        const weecklyPayment = +data.amountToPay / loanType.weekDuration;
        //(4200*.40)/(10+(.40+10))*10
        console.log("ROCKO");
        console.log(+data.amountToPay + renovationPendingAmount);
        const baseProfitAmount = (Number(data.amountGived) + Number(renovationPendingAmount)) * loanType.rate;
        const loan = await this.db.loan.create({
            data:{
                ...cleanedData, 
                amountGived: data.amountGived,
                status: LoanState.APPROVED, 
                weeklyPaymentAmount: weecklyPayment,
                amountToPay: data.amountToPay,
                pendingAmount: data.amountToPay,
                baseProfitAmount: baseProfitAmount,
                renovationPendingAmount,
                renovationProfitAmount: renovationProfitAmountToPay,
                totalProfitAmount: renovationProfitAmountToPay + baseProfitAmount,
                renovatedFromId: data.renovatedFromId ? data.renovatedFromId: null,
            }
        });
        
        
        await this.paymentScheduleService.createPaymentSchedule(new Date(data.firstPaymentDate), loanType.weekDuration, loan.id);
        return await this.db.loan.findUnique({
            where: {id:loan.id},
            include:{
                paymentSchedule:true,
                employee:{
                    include:{user:true}
                }
            }
        });
    }

    async create(data:LoanCreateInput){
        return await this.db.loan.create({data});
    }
}
