import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleWhereInput } from './payment-schedule-where.input';

@InputType()
export class PaymentScheduleListRelationFilter {

    @Field(() => PaymentScheduleWhereInput, {nullable:true})
    every?: PaymentScheduleWhereInput;

    @Field(() => PaymentScheduleWhereInput, {nullable:true})
    some?: PaymentScheduleWhereInput;

    @Field(() => PaymentScheduleWhereInput, {nullable:true})
    none?: PaymentScheduleWhereInput;
}
