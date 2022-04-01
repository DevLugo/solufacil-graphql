import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpensesWhereInput } from './expenses-where.input';
import { ExpensesOrderByWithRelationInput } from './expenses-order-by-with-relation.input';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExpensesCountAggregateInput } from './expenses-count-aggregate.input';
import { ExpensesAvgAggregateInput } from './expenses-avg-aggregate.input';
import { ExpensesSumAggregateInput } from './expenses-sum-aggregate.input';
import { ExpensesMinAggregateInput } from './expenses-min-aggregate.input';
import { ExpensesMaxAggregateInput } from './expenses-max-aggregate.input';

@ArgsType()
export class ExpensesAggregateArgs {

    @Field(() => ExpensesWhereInput, {nullable:true})
    where?: ExpensesWhereInput;

    @Field(() => [ExpensesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExpensesOrderByWithRelationInput>;

    @Field(() => ExpensesWhereUniqueInput, {nullable:true})
    cursor?: ExpensesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ExpensesCountAggregateInput, {nullable:true})
    _count?: ExpensesCountAggregateInput;

    @Field(() => ExpensesAvgAggregateInput, {nullable:true})
    _avg?: ExpensesAvgAggregateInput;

    @Field(() => ExpensesSumAggregateInput, {nullable:true})
    _sum?: ExpensesSumAggregateInput;

    @Field(() => ExpensesMinAggregateInput, {nullable:true})
    _min?: ExpensesMinAggregateInput;

    @Field(() => ExpensesMaxAggregateInput, {nullable:true})
    _max?: ExpensesMaxAggregateInput;
}
