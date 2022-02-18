import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { LoanCountOrderByAggregateInput } from './loan-count-order-by-aggregate.input';
import { LoanAvgOrderByAggregateInput } from './loan-avg-order-by-aggregate.input';
import { LoanMaxOrderByAggregateInput } from './loan-max-order-by-aggregate.input';
import { LoanMinOrderByAggregateInput } from './loan-min-order-by-aggregate.input';
import { LoanSumOrderByAggregateInput } from './loan-sum-order-by-aggregate.input';

@InputType()
export class LoanOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weeklyPaymentAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amountToPay?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contractId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    loantypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => LoanCountOrderByAggregateInput, {nullable:true})
    _count?: LoanCountOrderByAggregateInput;

    @Field(() => LoanAvgOrderByAggregateInput, {nullable:true})
    _avg?: LoanAvgOrderByAggregateInput;

    @Field(() => LoanMaxOrderByAggregateInput, {nullable:true})
    _max?: LoanMaxOrderByAggregateInput;

    @Field(() => LoanMinOrderByAggregateInput, {nullable:true})
    _min?: LoanMinOrderByAggregateInput;

    @Field(() => LoanSumOrderByAggregateInput, {nullable:true})
    _sum?: LoanSumOrderByAggregateInput;
}
