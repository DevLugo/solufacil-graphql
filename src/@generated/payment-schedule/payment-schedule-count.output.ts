import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PaymentScheduleCount {

    @Field(() => Int, {nullable:false})
    loanPayments?: number;

    @Field(() => Int, {nullable:false})
    CommissionPayment?: number;
}
