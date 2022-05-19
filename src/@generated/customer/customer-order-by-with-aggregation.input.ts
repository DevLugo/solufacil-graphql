import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CustomerCountOrderByAggregateInput } from './customer-count-order-by-aggregate.input';
import { CustomerMaxOrderByAggregateInput } from './customer-max-order-by-aggregate.input';
import { CustomerMinOrderByAggregateInput } from './customer-min-order-by-aggregate.input';

@InputType()
export class CustomerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    logo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CustomerCountOrderByAggregateInput, {nullable:true})
    _count?: CustomerCountOrderByAggregateInput;

    @Field(() => CustomerMaxOrderByAggregateInput, {nullable:true})
    _max?: CustomerMaxOrderByAggregateInput;

    @Field(() => CustomerMinOrderByAggregateInput, {nullable:true})
    _min?: CustomerMinOrderByAggregateInput;
}
