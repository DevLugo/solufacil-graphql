import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleCreateInput } from './payment-schedule-create.input';
import { PaymentScheduleUpdateInput } from './payment-schedule-update.input';

@ArgsType()
export class UpsertOnePaymentScheduleArgs {

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:false})
    where!: PaymentScheduleWhereUniqueInput;

    @Field(() => PaymentScheduleCreateInput, {nullable:false})
    create!: PaymentScheduleCreateInput;

    @Field(() => PaymentScheduleUpdateInput, {nullable:false})
    update!: PaymentScheduleUpdateInput;
}
