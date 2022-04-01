import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PaymentState } from '../prisma/payment-state.enum';
import { ExpensesCountAggregate } from './expenses-count-aggregate.output';
import { ExpensesAvgAggregate } from './expenses-avg-aggregate.output';
import { ExpensesSumAggregate } from './expenses-sum-aggregate.output';
import { ExpensesMinAggregate } from './expenses-min-aggregate.output';
import { ExpensesMaxAggregate } from './expenses-max-aggregate.output';

@ObjectType()
export class ExpensesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amountToPay!: any;

    @Field(() => PaymentState, {nullable:false})
    status!: keyof typeof PaymentState;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => Date, {nullable:false})
    payedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => ExpensesCountAggregate, {nullable:true})
    _count?: ExpensesCountAggregate;

    @Field(() => ExpensesAvgAggregate, {nullable:true})
    _avg?: ExpensesAvgAggregate;

    @Field(() => ExpensesSumAggregate, {nullable:true})
    _sum?: ExpensesSumAggregate;

    @Field(() => ExpensesMinAggregate, {nullable:true})
    _min?: ExpensesMinAggregate;

    @Field(() => ExpensesMaxAggregate, {nullable:true})
    _max?: ExpensesMaxAggregate;
}
