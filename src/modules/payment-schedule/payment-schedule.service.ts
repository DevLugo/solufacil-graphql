import { Injectable } from '@nestjs/common';
import { PaymentScheduleWhereInput } from './types';
import { PrismaService } from '../../core/prisma/prisma.service';
import { PaymentState } from '@prisma/client';
import { PaymentBreakDown } from '../types';
import { calculatePayedPercentege, getPercentageOf } from '../loan/paymentUtils';
import * as moment from 'moment-timezone';

@Injectable()
export class PaymentScheduleService {
    constructor(
        private readonly _db: PrismaService
    ) {}
    WEEK_SECONDS =  7 * 24 * 60 * 60 * 1000;
    
    async getPaymentSchedules(where: PaymentScheduleWhereInput) {
        const dueDate = where.dueDate ? new Date(where.dueDate) : undefined;
        const startDate = where.startDate ? new Date(where.startDate) : undefined;

        //const startOfDay = dueDate ? new Date(Date.UTC(dueDate.getUTCFullYear(), dueDate.getUTCMonth(), dueDate.getUTCDate())) : undefined;
        console.log("==============DUE DATE===============");
        console.log(dueDate, where.dueDate)
        console.log("==============Start DATE===============");
        console.log(startDate)
    
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
                    dueDate: {
                        lt: dueDate,
                        gte: startDate
                    },
                    status: {
                        in: ["PENDING", "PARTIALLY_PAID"]
                    }
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
            const timezone = 'America/Mexico_City'; // Example timezone

        const transformedDate = moment.tz(firstDayPay, timezone);
        let nextDateToPay:Date = transformedDate.toDate();

        console.log("----------------")
        console.log("----------------")
        console.log(firstDayPay, nextDateToPay)
        console.log(firstDayPay, transformedDate.format());

        const transactions = [];
        while (i < weeksDuration){
            nextDateToPay = i > 0 ? new Date(nextDateToPay.getTime() + weekSeconds): nextDateToPay;
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
