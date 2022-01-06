import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PaymentState } from '../prisma/payment-state.enum';
import { LoanPaymentCountAggregate } from './loan-payment-count-aggregate.output';
import { LoanPaymentAvgAggregate } from './loan-payment-avg-aggregate.output';
import { LoanPaymentSumAggregate } from './loan-payment-sum-aggregate.output';
import { LoanPaymentMinAggregate } from './loan-payment-min-aggregate.output';
import { LoanPaymentMaxAggregate } from './loan-payment-max-aggregate.output';

@ObjectType()
export class LoanPaymentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    numeration!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: any;

    @Field(() => PaymentState, {nullable:false})
    status!: keyof typeof PaymentState;

    @Field(() => Date, {nullable:false})
    paidDate!: Date | string;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    loanId?: string;

    @Field(() => LoanPaymentCountAggregate, {nullable:true})
    _count?: LoanPaymentCountAggregate;

    @Field(() => LoanPaymentAvgAggregate, {nullable:true})
    _avg?: LoanPaymentAvgAggregate;

    @Field(() => LoanPaymentSumAggregate, {nullable:true})
    _sum?: LoanPaymentSumAggregate;

    @Field(() => LoanPaymentMinAggregate, {nullable:true})
    _min?: LoanPaymentMinAggregate;

    @Field(() => LoanPaymentMaxAggregate, {nullable:true})
    _max?: LoanPaymentMaxAggregate;
}
