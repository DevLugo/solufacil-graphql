import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PaymentState } from '../prisma/payment-state.enum';
import { Loan } from '../loan/loan.model';

@ObjectType()
export class LoanPayment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    numeration!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: any;

    @Field(() => PaymentState, {nullable:false})
    status!: keyof typeof PaymentState;

    @Field(() => Date, {nullable:false})
    paidDate!: Date;

    @Field(() => Date, {nullable:false})
    dueDate!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Loan, {nullable:true})
    Loan?: Loan | null;

    @Field(() => String, {nullable:true})
    loanId!: string | null;
}
