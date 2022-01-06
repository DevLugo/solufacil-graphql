import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LoantypeCountOrderByAggregateInput } from './loantype-count-order-by-aggregate.input';
import { LoantypeAvgOrderByAggregateInput } from './loantype-avg-order-by-aggregate.input';
import { LoantypeMaxOrderByAggregateInput } from './loantype-max-order-by-aggregate.input';
import { LoantypeMinOrderByAggregateInput } from './loantype-min-order-by-aggregate.input';
import { LoantypeSumOrderByAggregateInput } from './loantype-sum-order-by-aggregate.input';

@InputType()
export class LoantypeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weekDuration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    MaxAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    overdueRate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => LoantypeCountOrderByAggregateInput, {nullable:true})
    _count?: LoantypeCountOrderByAggregateInput;

    @Field(() => LoantypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: LoantypeAvgOrderByAggregateInput;

    @Field(() => LoantypeMaxOrderByAggregateInput, {nullable:true})
    _max?: LoantypeMaxOrderByAggregateInput;

    @Field(() => LoantypeMinOrderByAggregateInput, {nullable:true})
    _min?: LoantypeMinOrderByAggregateInput;

    @Field(() => LoantypeSumOrderByAggregateInput, {nullable:true})
    _sum?: LoantypeSumOrderByAggregateInput;
}
