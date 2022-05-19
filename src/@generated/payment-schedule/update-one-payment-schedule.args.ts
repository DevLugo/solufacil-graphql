import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentScheduleUpdateInput } from './payment-schedule-update.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';

@ArgsType()
export class UpdateOnePaymentScheduleArgs {

    @Field(() => PaymentScheduleUpdateInput, {nullable:false})
    data!: PaymentScheduleUpdateInput;

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:false})
    where!: PaymentScheduleWhereUniqueInput;
}
