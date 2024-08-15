import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PaymentSchedule, PaymentScheduleWhereInput } from './types';
import { PaymentScheduleService } from './payment-schedule.service';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Borrower } from '../borrower/types';
import { PrismaService } from '../../core/prisma/prisma.service';
import { startOfWeek, endOfWeek } from 'date-fns';

@Resolver(PaymentSchedule)
export class PaymentScheduleResolver {
    constructor(
        private readonly _paymentScheduleService: PaymentScheduleService,
        private readonly _db: PrismaService,
        
    ) {}
    
    @Query(() => [PaymentSchedule])
    async getPaymentSchedules(
        @Args('where', {nullable:true}) where: PaymentScheduleWhereInput,
    ) {
        return this._paymentScheduleService.getPaymentSchedules(where);
    }

    @ResolveField(() => GraphQLDecimal)
    async pendingAmount(@Parent() root: PaymentSchedule) {
        return +root.amountToPay - (+root.paidAmount);
    }


    @ResolveField(() => GraphQLDecimal)
    async weecklyPendingAmount(@Parent() root: PaymentSchedule) {
        const now = new Date();
        const startOfWeekDate = startOfWeek(now, { weekStartsOn: 1 }); // Monday
        const endOfWeekDate = endOfWeek(now, { weekStartsOn: 1 }); // Sunday

        const payments = await this._db.loanPayment.findMany({
            where: {
                loanId: root.loanId,
                createdAt: {
                    gte: startOfWeekDate,
                    lte: endOfWeekDate,
                },
            },
        });

        const weecklyPayedAmount = payments.reduce((sum, payment) => sum + +payment.amount, 0);
        return Math.max(0, +root.amountToPay - weecklyPayedAmount);
    }

    @ResolveField(() => Borrower)
    async borrower(@Parent() root: PaymentSchedule) {
        return this._db.borrower.findFirst({
            where:{
                contract:{
                    some:{
                        loans:{
                            some:{
                                id: root.loanId
                            }
                        }
                    }
                }
            }
        });
    }
}
