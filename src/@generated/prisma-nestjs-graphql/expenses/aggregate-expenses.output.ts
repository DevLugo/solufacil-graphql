import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ExpensesCountAggregate } from './expenses-count-aggregate.output';
import { ExpensesAvgAggregate } from './expenses-avg-aggregate.output';
import { ExpensesSumAggregate } from './expenses-sum-aggregate.output';
import { ExpensesMinAggregate } from './expenses-min-aggregate.output';
import { ExpensesMaxAggregate } from './expenses-max-aggregate.output';

@ObjectType()
export class AggregateExpenses {

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
