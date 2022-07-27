import { Injectable } from '@nestjs/common';
import { LoanPaymentWhereInput } from '../../../@generated/loan-payment/loan-payment-where.input';
import { LoanPaymentCreateInput } from '../../../@generated/loan-payment/loan-payment-create.input';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { PaymentState } from '../../../@generated/prisma/payment-state.enum';
import { LoanPaymentUpdateInput } from './inputs/UpdatePaymentInput';
import { UtilsService } from '../utils.service';

@Injectable()
export class LoanPaymentService {
    constructor(
        private readonly UtilsService: UtilsService,
        private readonly db:PrismaService){}
    async getMany(where:LoanPaymentWhereInput){
        return await this.db.loanPayment.findMany({
            where
        });
    }

    async create(data:LoanPaymentCreateInput){
        return await this.db.loanPayment.create({
            data:{
                ...data
            }
        });
    }

    async addPaymentToLoan(data:LoanPaymentUpdateInput){
        let amountForPayment: Number = Number(data.amount);
        const loan = await this.db.loan.findUnique(
            {where: {
            id: data.loanId,
            },
            include: {loanType:true}
        });
        if (Number(amountForPayment) > Number(loan.pendingAmount)) throw new Error("La cantidad es mayor a la deuda pendiente")
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
            const currentPayment = getNextPayments[0];
            const pendingAmount = (Number(currentPayment.amountToPay)-Number(currentPayment.paidAmount));
            const coverFullAmount = Number(amountForPayment) >= pendingAmount;
            const status: PaymentState = coverFullAmount ? PaymentState.PAID_OUT:PaymentState.PARTIALLY_PAID;
            const paidAmount = coverFullAmount ? pendingAmount : Number(amountForPayment); 
            amountForPayment = Number(amountForPayment) - Number(paidAmount);
            
            bulkDbActions.push(
                this.db.paymentSchedule.update({
                    data: { 
                        status,
                        paidAmount,
                    },
                    where: { id:currentPayment.id }
                })
            );
            paymentSchedulesIds.push(currentPayment.id);
            getNextPayments.shift();
        }

        const percentegeToPaid = this.UtilsService.calculatePayedPercentege(Number(data.amount), +loan.amountToPay);
        const totalProfitToPaid = this.UtilsService.getPercentageOf(percentegeToPaid, Number(loan.totalProfitAmount));
        
        bulkDbActions.push(
            this.db.loanPayment.create({
                data: {
                    amount: Number(data.amount),
                    profitAmount: Number(totalProfitToPaid),
                    returnToCapital: data.amount-Number(totalProfitToPaid),
                    percentage: Number(10.285714286),
                    date: new Date(String(data.paidDate)),
                    //TODO: add one comment at time
                    paymentSchedules:{connect:paymentSchedulesIds.map(id => { 
                        return {id}})
                    },
                    loan: {connect:{id:loanId}},
                    employee: {connect:{id:data.employeeId}}
                }
            })
        );
       
        bulkDbActions.push(
            this.db.loan.update({
                where:{
                    id:loanId
                },
                data:{
                    paidAmount: Number(loan.paidAmount) + Number(data.amount),
                    pendingAmount: +loan.pendingAmount - data.amount,
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
