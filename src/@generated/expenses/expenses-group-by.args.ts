import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpensesWhereInput } from './expenses-where.input';
import { ExpensesOrderByWithAggregationInput } from './expenses-order-by-with-aggregation.input';
import { ExpensesScalarFieldEnum } from './expenses-scalar-field.enum';
import { ExpensesScalarWhereWithAggregatesInput } from './expenses-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ExpensesCountAggregateInput } from './expenses-count-aggregate.input';
import { ExpensesAvgAggregateInput } from './expenses-avg-aggregate.input';
import { ExpensesSumAggregateInput } from './expenses-sum-aggregate.input';
import { ExpensesMinAggregateInput } from './expenses-min-aggregate.input';
import { ExpensesMaxAggregateInput } from './expenses-max-aggregate.input';

@ArgsType()
export class ExpensesGroupByArgs {

    @Field(() => ExpensesWhereInput, {nullable:true})
    where?: ExpensesWhereInput;

    @Field(() => [ExpensesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ExpensesOrderByWithAggregationInput>;

    @Field(() => [ExpensesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ExpensesScalarFieldEnum>;

    @Field(() => ExpensesScalarWhereWithAggregatesInput, {nullable:true})
    having?: ExpensesScalarWhereWithAggregatesInput;

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
