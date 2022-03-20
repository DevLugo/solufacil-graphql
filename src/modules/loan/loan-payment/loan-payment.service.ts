import { Injectable } from '@nestjs/common';
import { LoanPaymentWhereInput } from '../../../@generated/prisma-nestjs-graphql/loan-payment/loan-payment-where.input';
import { LoanPaymentCreateInput } from '../../../@generated/prisma-nestjs-graphql/loan-payment/loan-payment-create.input';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { PaymentState } from '../../../@generated/prisma-nestjs-graphql/prisma/payment-state.enum';
import { LoanPaymentUpdateInput } from './inputs/UpdatePaymentInput';

@Injectable()
export class LoanPaymentService {
    constructor(private readonly db:PrismaService){}
    async getMany(where:LoanPaymentWhereInput){
        return await this.db.loanPayment.findMany({
            where
        });
    }

    async create(data:LoanPaymentCreateInput){
        return await this.db.loanPayment.create({data});
    }

    async addPaymentToLoan(data:LoanPaymentUpdateInput){
        let amountForPayment: Number = Number(data.amount);
        let getNextPayments = await this.db.paymentSchedule.findMany(
            {
                where: {
                    status: { not: PaymentState.PAID_OUT },
                    loanId:data.loanId
                },
                orderBy:{numeration:"asc"}
            }
        );
        if (!getNextPayments.length) throw new Error('No pending payments for this loan');
        const loanId = getNextPayments[0].loanId;
        const bulkDbActions = [];
        const paymentSchedulesIds = [];
        while(amountForPayment){
            const nextPayment = getNextPayments[0];
            const pendingAmount = (Number(nextPayment.amountToPay)-Number(nextPayment.paidAmount));
            const coverFullAmount = Number(amountForPayment) >= pendingAmount;
            const status: PaymentState = coverFullAmount ? PaymentState.PAID_OUT:PaymentState.PARTIALLY_PAID;
            const paidAmount = coverFullAmount ? pendingAmount : Number(amountForPayment); 
            amountForPayment = Number(amountForPayment) - Number(paidAmount);
            bulkDbActions.push(
                this.db.paymentSchedule.update({
                    data: { status, paidAmount },
                    where: { id:nextPayment.id }
                })
            );
            
            paymentSchedulesIds.push(nextPayment.id);
            getNextPayments.shift();
        }
        bulkDbActions.push(
            this.db.loanPayment.create({
                data: {
                    amount: Number(data.amount),
                    date: new Date(String(data.paidDate)),
                    comments: String(data.details),
                    paymentSchedules:{connect:paymentSchedulesIds.map(id => { 
                        return {id}})
                    },
                    loan: {connect:{id:loanId}},
                    employee: {connect:{id:data.employeeId}}
                }
            })
        );
        await this.db.$transaction(bulkDbActions);

    }

    async getTotalPaidAmount(loanId:string){
        const result = await this.db.loanPayment.aggregate({
            _sum:{ amount:true },
            where:{ loanId }
        });
        return result._sum.amount || 0;
    }
    
    async gePayments(loanId:string){
        return await this.db.loanPayment.findMany({
            where:{loanId},
            orderBy:{createdAt:"asc"}
        })
    }

    async createPayment(data:LoanPaymentCreateInput){
        return await this.db.loanPayment.create({data});
    }
}
