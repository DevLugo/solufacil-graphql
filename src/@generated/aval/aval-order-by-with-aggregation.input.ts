import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { AvalCountOrderByAggregateInput } from './aval-count-order-by-aggregate.input';
import { AvalMaxOrderByAggregateInput } from './aval-max-order-by-aggregate.input';
import { AvalMinOrderByAggregateInput } from './aval-min-order-by-aggregate.input';

@InputType()
export class AvalOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @HideField()
    fullName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => AvalCountOrderByAggregateInput, {nullable:true})
    _count?: AvalCountOrderByAggregateInput;

    @Field(() => AvalMaxOrderByAggregateInput, {nullable:true})
    _max?: AvalMaxOrderByAggregateInput;

    @Field(() => AvalMinOrderByAggregateInput, {nullable:true})
    _min?: AvalMinOrderByAggregateInput;
}
