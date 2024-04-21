import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PaymentSchedule, PaymentScheduleWhereInput } from './types';
import { PaymentScheduleService } from './payment-schedule.service';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Borrower } from '../borrower/types';
import { PrismaService } from '../../core/prisma/prisma.service';

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
