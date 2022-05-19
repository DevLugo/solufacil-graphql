import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CommissionPaymentCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    loanId!: number;

    @Field(() => Int, {nullable:false})
    paymentScheduleId!: number;

    @Field(() => Int, {nullable:false})
    employeeId!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
