import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ExpensesCountOrderByAggregateInput } from './expenses-count-order-by-aggregate.input';
import { ExpensesAvgOrderByAggregateInput } from './expenses-avg-order-by-aggregate.input';
import { ExpensesMaxOrderByAggregateInput } from './expenses-max-order-by-aggregate.input';
import { ExpensesMinOrderByAggregateInput } from './expenses-min-order-by-aggregate.input';
import { ExpensesSumOrderByAggregateInput } from './expenses-sum-order-by-aggregate.input';

@InputType()
export class ExpensesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amountToPay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dueDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payedAt?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => ExpensesCountOrderByAggregateInput, {nullable:true})
    _count?: ExpensesCountOrderByAggregateInput;

    @Field(() => ExpensesAvgOrderByAggregateInput, {nullable:true})
    _avg?: ExpensesAvgOrderByAggregateInput;

    @Field(() => ExpensesMaxOrderByAggregateInput, {nullable:true})
    _max?: ExpensesMaxOrderByAggregateInput;

    @Field(() => ExpensesMinOrderByAggregateInput, {nullable:true})
    _min?: ExpensesMinOrderByAggregateInput;

    @Field(() => ExpensesSumOrderByAggregateInput, {nullable:true})
    _sum?: ExpensesSumOrderByAggregateInput;
}
