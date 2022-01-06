import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { BorrowerCountOrderByAggregateInput } from './borrower-count-order-by-aggregate.input';
import { BorrowerMaxOrderByAggregateInput } from './borrower-max-order-by-aggregate.input';
import { BorrowerMinOrderByAggregateInput } from './borrower-min-order-by-aggregate.input';

@InputType()
export class BorrowerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BorrowerCountOrderByAggregateInput, {nullable:true})
    _count?: BorrowerCountOrderByAggregateInput;

    @Field(() => BorrowerMaxOrderByAggregateInput, {nullable:true})
    _max?: BorrowerMaxOrderByAggregateInput;

    @Field(() => BorrowerMinOrderByAggregateInput, {nullable:true})
    _min?: BorrowerMinOrderByAggregateInput;
}
