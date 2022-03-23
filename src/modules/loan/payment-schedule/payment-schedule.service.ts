import { Injectable } from '@nestjs/common';
import { PaymentScheduleWhereInput } from '../../../@generated/prisma-nestjs-graphql/payment-schedule/payment-schedule-where.input';
import { PaymentState } from '../../../@generated/prisma-nestjs-graphql/prisma/payment-state.enum';
import { PrismaService } from '../../../core/prisma/prisma.service';

@Injectable()
export class PaymentScheduleService {
    constructor(private readonly db:PrismaService){}
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
}
