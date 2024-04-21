import { Injectable } from '@nestjs/common';
import { PaymentState } from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { calculatePayedPercentege, getPercentageOf } from '../loan/paymentUtils';
import { AddPaymentToLoanInput, PayLoanPaymentInput } from './types';

@Injectable()
export class LoanPaymentService {
    constructor(
        //private readonly UtilsService: UtilsService,
        private readonly _db:PrismaService
    ){}

    async addPaymentToLoan(data:AddPaymentToLoanInput){
        let amountForPayment: Number = Number(data.amount);
        const loan = await this._db.loan.findUnique(
            {where: {
            id: data.loanId,
            },
            include: {loanType:true}
        });
        if (Number(amountForPayment) > Number(loan.pendingAmount)) throw new Error("La cantidad es mayor a la deuda pendiente")
        let getNextPayments = await this._db.paymentSchedule.findMany(
            {
                where: {
                    status: { not: PaymentState.PAID_OUT },
                    loanId:data.loanId
                },
                orderBy:{numeration:"asc"}
            }
        );
        if (!getNextPayments.length) throw new Error('No hay paogs pendientes para este credito');
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
                this._db.paymentSchedule.update({
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

        const percentegeToPaid = calculatePayedPercentege(Number(data.amount), +loan.amountToPay);
        const totalProfitToPaid = getPercentageOf(percentegeToPaid, Number(loan.totalProfitAmount));
        
        bulkDbActions.push(
            this._db.loanPayment.create({
                data: {
                    amount: Number(data.amount),
                    profitAmount: Number(totalProfitToPaid),
                    returnToCapital: +data.amount-Number(totalProfitToPaid),
                    percentage: Number(10.285714286),//TODO: calculate percentage
                    
                    //date: new Date(String(data.paidDate)),
                    //TODO: add one comment at time
                    paymentSchedules:{connect:paymentSchedulesIds.map(id => { 
                        return {id}})
                    },
                    loan: {connect:{id:loanId}},
                    //TODO
                    /* leadPaymentReceived: data.leadPaymentReceivedId ? 
                        { connect:{id:data.leadPaymentReceivedId} }: undefined, */
                    collector: {connect:{id:data.collectorId}},
                }
            })
        );
       
        bulkDbActions.push(
            this._db.loan.update({
                where:{
                    id:loanId
                },
                data:{
                    paidAmount: Number(loan.paidAmount) + Number(data.amount),
                    pendingAmount: +loan.pendingAmount - Number(data.amount),
                }
            })
        );
        await this._db.$transaction(bulkDbActions);
    }
}
