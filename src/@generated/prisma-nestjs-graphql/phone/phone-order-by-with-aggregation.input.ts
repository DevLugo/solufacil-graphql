import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PhoneCountOrderByAggregateInput } from './phone-count-order-by-aggregate.input';
import { PhoneMaxOrderByAggregateInput } from './phone-max-order-by-aggregate.input';
import { PhoneMinOrderByAggregateInput } from './phone-min-order-by-aggregate.input';

@InputType()
export class PhoneOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    borrowerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => PhoneCountOrderByAggregateInput, {nullable:true})
    _count?: PhoneCountOrderByAggregateInput;

    @Field(() => PhoneMaxOrderByAggregateInput, {nullable:true})
    _max?: PhoneMaxOrderByAggregateInput;

    @Field(() => PhoneMinOrderByAggregateInput, {nullable:true})
    _min?: PhoneMinOrderByAggregateInput;
}
