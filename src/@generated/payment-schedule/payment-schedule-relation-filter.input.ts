import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleWhereInput } from './payment-schedule-where.input';

@InputType()
export class PaymentScheduleRelationFilter {

    @Field(() => PaymentScheduleWhereInput, {nullable:true})
    is?: PaymentScheduleWhereInput;

    @Field(() => PaymentScheduleWhereInput, {nullable:true})
    isNot?: PaymentScheduleWhereInput;
}
