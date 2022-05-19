import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EmployeeCount {

    @Field(() => Int, {nullable:false})
    phones?: number;

    @Field(() => Int, {nullable:false})
    documents?: number;

    @Field(() => Int, {nullable:false})
    loan?: number;

    @Field(() => Int, {nullable:false})
    loanPayment?: number;

    @Field(() => Int, {nullable:false})
    commissionPayment?: number;

    @Field(() => Int, {nullable:false})
    contractEmployee?: number;

    @Field(() => Int, {nullable:false})
    contractLoanLead?: number;

    @Field(() => Int, {nullable:false})
    Expenses?: number;
}