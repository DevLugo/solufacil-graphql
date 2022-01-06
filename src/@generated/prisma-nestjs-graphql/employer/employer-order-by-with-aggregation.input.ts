import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EmployerCountOrderByAggregateInput } from './employer-count-order-by-aggregate.input';
import { EmployerMaxOrderByAggregateInput } from './employer-max-order-by-aggregate.input';
import { EmployerMinOrderByAggregateInput } from './employer-min-order-by-aggregate.input';

@InputType()
export class EmployerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fullName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => EmployerCountOrderByAggregateInput, {nullable:true})
    _count?: EmployerCountOrderByAggregateInput;

    @Field(() => EmployerMaxOrderByAggregateInput, {nullable:true})
    _max?: EmployerMaxOrderByAggregateInput;

    @Field(() => EmployerMinOrderByAggregateInput, {nullable:true})
    _min?: EmployerMinOrderByAggregateInput;
}
