import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PaymentSchedule, PaymentScheduleWhereInput } from './types';
import { PaymentScheduleService } from './payment-schedule.service';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@Resolver(PaymentSchedule)
export class PaymentScheduleResolver {
    constructor(
        private readonly _paymentScheduleService: PaymentScheduleService
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
}
