import { Injectable } from '@nestjs/common';
import { PaymentScheduleWhereInput } from './types';
import { PrismaService } from '../../core/prisma/prisma.service';
import { PaymentState } from '@prisma/client';
import { PaymentBreakDown } from '../types';
import { calculatePayedPercentege, getPercentageOf } from '../loan/paymentUtils';

@Injectable()
export class PaymentScheduleService {
    constructor(
        private readonly _db: PrismaService
    ) {}
    WEEK_SECONDS =  7 * 24 * 60 * 60 * 1000;
    
    async getPaymentSchedules(where: PaymentScheduleWhereInput) {
        return this._db.paymentSchedule.findMany(
            {
                where: {
                    loan: {
                        is: {
                            contract: where.leadId ? {
                                is: {
                                    loanLead: {
                                        is: {
                                            id: {
                                                equals: where.leadId
                                            }
                                        }
                                    }
                                }
                            } : undefined
                        }
                    },
                    dueDate: where.dueDate ? {
                        lte: where.dueDate
                    } : undefined,
                    OR: [
                        {
                            status: where.paymentState ?{
                                in: where.paymentState
                            } : undefined
                        },
                        {
                            delayed: {
                                equals: true
                            }
                        }
                    ]
                }
            }  
        );
    }

    async createPaymentSchedule(firstDayPay: Date, weeksDuration:number, loanId:string){
        let i = 0;
        const weekSeconds = this.WEEK_SECONDS;
        const loan = await this._db.loan.findUnique(
            {
                where: {id: loanId},
                include:{loanType:true}
            });
        let nextDateToPay:Date = firstDayPay;
        const transactions = [];
        while (i < weeksDuration){
            nextDateToPay = new Date(nextDateToPay.getTime( ) + (weekSeconds * i));
            const percentegeToPaid = calculatePayedPercentege(+loan.weeklyPaymentAmount, +loan.amountToPay);
            const profit = getPercentageOf(percentegeToPaid, Number(loan.totalProfitAmount));
           
            transactions.push(
                this._db.paymentSchedule.create({
                    data: {
                        amountToPay: loan.weeklyPaymentAmount,
                        dueDate: nextDateToPay,
                        paidAmount: 0,
                        numeration: i+1,
                        status: PaymentState.PENDING,
                        profit: +profit,
                        returnToCapital: +loan.weeklyPaymentAmount-Number(profit),
                        loan: {
                            connect: {id:loan.id}
                        }
                    }
                })
            )
            i++;
        }
        return await this._db.$transaction(transactions);
    }

    paymentBreakDown(amount:Number, rate:number): PaymentBreakDown {
        //(1000*.2)/12 * 10;
        //(650*.3)/13 * 10;
        const profit = (Number(amount) / rate) / Number((10 + (rate * 10) * 10));
        const returnOfCapital = Number(amount)-profit;
        const breakDown:PaymentBreakDown = {
            amount: Number(amount.toFixed(2)), 
            profit: Number(profit.toFixed(2)),
            returnOfCapital: Number(returnOfCapital.toFixed(2))
        }
        return breakDown
    }
}
