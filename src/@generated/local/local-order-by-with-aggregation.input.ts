import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { LocalCountOrderByAggregateInput } from './local-count-order-by-aggregate.input';
import { LocalMaxOrderByAggregateInput } from './local-max-order-by-aggregate.input';
import { LocalMinOrderByAggregateInput } from './local-min-order-by-aggregate.input';

@InputType()
export class LocalOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    borrowerId?: keyof typeof SortOrder;

    @Field(() => LocalCountOrderByAggregateInput, {nullable:true})
    _count?: LocalCountOrderByAggregateInput;

    @Field(() => LocalMaxOrderByAggregateInput, {nullable:true})
    _max?: LocalMaxOrderByAggregateInput;

    @Field(() => LocalMinOrderByAggregateInput, {nullable:true})
    _min?: LocalMinOrderByAggregateInput;
}
