import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentScheduleWhereInput } from './payment-schedule-where.input';

@ArgsType()
export class DeleteManyPaymentScheduleArgs {

    @Field(() => PaymentScheduleWhereInput, {nullable:true})
    where?: PaymentScheduleWhereInput;
}
