import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PaymentScheduleCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    numeration!: number;

    @Field(() => Int, {nullable:false})
    amountToPay!: number;

    @Field(() => Int, {nullable:false})
    paidAmount!: number;

    @Field(() => Int, {nullable:false})
    returnToCapital!: number;

    @Field(() => Int, {nullable:false})
    profit!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    delayed!: number;

    @Field(() => Int, {nullable:false})
    dueDate!: number;

    @Field(() => Int, {nullable:false})
    details!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    loanId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
