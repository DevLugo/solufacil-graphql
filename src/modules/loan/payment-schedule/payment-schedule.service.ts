import { Injectable } from '@nestjs/common';
import { PaymentScheduleWhereInput } from '../../../@generated/prisma-nestjs-graphql/payment-schedule/payment-schedule-where.input';
import { PaymentState } from '../../../@generated/prisma-nestjs-graphql/prisma/payment-state.enum';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { LoanService } from '../loan.service';
import { IResumePayload } from './payloads/resume';

@Injectable()
export class PaymentScheduleService {
    constructor(
        private readonly db:PrismaService){}
    WEEK_SECONDS =  7 * 24 * 60 * 60 * 1000;

    async createPaymentSchedule(firstDayPay: Date, weeksDuration:number, loanId:string){
        let i = 0;
        const weekSeconds = this.WEEK_SECONDS;
        const loan = await this.db.loan.findUnique(
            {
                where: {id: loanId},
                include:{loanType:true}
            });
        let nextDateToPay:Date = firstDayPay;
        const transactions = [];
        while (i < weeksDuration){
            nextDateToPay = new Date(nextDateToPay.getTime( ) + weekSeconds);
            transactions.push(
                this.db.paymentSchedule.create({
                    data: {
                        amountToPay: loan.weeklyPaymentAmount,
                        dueDate: nextDateToPay,
                        paidAmount: 0,
                        numeration: i+1,
                        status: PaymentState.PENDING,
                        loan: {
                            connect: {id:loan.id}
                        }
                    }
                })
            )
            i++;
        }
        await this.db.$transaction(transactions);
    }

    async getPaymentSchedules(loanId:string){
        return await this.db.paymentSchedule.findMany({
            where:{loanId},
            orderBy:{numeration:"asc"}
        })
    }
    
    async getPaymentSchedulesWhere(where:PaymentScheduleWhereInput){
        return await this.db.paymentSchedule.findMany({where})
    }

    async rangeResume(dateStart:Date, dateEnd: Date): Promise<IResumePayload>{
        const resume:IResumePayload = {
            expenses: Number(await this.rangeExpenses(dateStart, dateEnd)),
            newLoans: await this.rangeNewLoans(dateStart, dateEnd),
            paidOut: Number(await this.rangePaidOut(dateStart, dateEnd)),
            profit: Number(await this.rangeProfit(dateStart, dateEnd)),
            returnOfCapital: Number(await this.rangeReturnOfCapital(dateStart, dateEnd)),
        }
        return resume;
    }
    
    async rangeProfit(dateStart:Date, dateEnd: Date){
        const profit = await this.db.paymentSchedule.aggregate({
            where:{
                dueDate:{
                    gte: dateStart,
                    lte: dateEnd,
                },
                status: {
                    in: ["PAID_OUT", "PARTIALLY_PAID"]
                }
            },
            _sum: {
                profit: true
            }
        });
        return profit._sum.profit || 0;
    }
    async rangePaidOut(dateStart:Date, dateEnd: Date){
        const paidOut = await this.db.paymentSchedule.aggregate({
            where:{
                dueDate:{
                    gte: dateStart,
                    lte: dateEnd,
                },
                status: {
                    in: ["PAID_OUT", "PARTIALLY_PAID"]
                }
            },
            _sum: {
                paidAmount: true
            }
        });
        return paidOut._sum.paidAmount || 0;
    }
    async rangeReturnOfCapital(dateStart:Date, dateEnd: Date){
        const returnOfCapital = await this.db.paymentSchedule.aggregate({
            where:{
                dueDate:{
                    gte: dateStart,
                    lte: dateEnd,
                },
                status: {
                    in: ["PAID_OUT", "PARTIALLY_PAID"]
                }
            },
            _sum: {
                returnToCapital: true
            }
        });
        return returnOfCapital._sum.returnToCapital || 0;
    }
    async rangeNewLoans(dateStart:Date, dateEnd: Date){
        const newLoans = await this.db.loan.aggregate({
            where:{
                signDate: { 
                        gte: dateStart,
                        lte: dateEnd,
                }
            },
            _count:{
                id:true
            }
        });
        return newLoans._count.id  || 0;
    }

    async rangeExpenses(dateStart:Date, dateEnd: Date){
        const newLoans = await this.db.expenses.aggregate({
            where:{
                payedAt: {
                    gte: dateStart,
                    lte: dateEnd,
                },
                status: {
                    in: ["PAID_OUT", "PARTIALLY_PAID"]
                }
            },
            _sum: {
                amountToPay: true
            }
        });
        return newLoans._sum.amountToPay  || 0;
    }
}
