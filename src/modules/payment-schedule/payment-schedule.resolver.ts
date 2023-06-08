import { Args, Query, Resolver } from '@nestjs/graphql';
import { PaymentSchedule, PaymentScheduleWhereInput } from './types';
import { PrismaService } from '../../core/prisma/prisma.service';
import { PaymentScheduleService } from './payment-schedule.service';

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
}
