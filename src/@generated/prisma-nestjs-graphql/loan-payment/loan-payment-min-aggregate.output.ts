import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PaymentState } from '../prisma/payment-state.enum';

@ObjectType()
export class LoanPaymentMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    numeration?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    amount?: any;

    @Field(() => PaymentState, {nullable:true})
    status?: keyof typeof PaymentState;

    @Field(() => Date, {nullable:true})
    paidDate?: Date | string;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    loanId?: string;
}
