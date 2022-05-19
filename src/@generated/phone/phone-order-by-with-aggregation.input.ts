import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { PhoneCountOrderByAggregateInput } from './phone-count-order-by-aggregate.input';
import { PhoneMaxOrderByAggregateInput } from './phone-max-order-by-aggregate.input';
import { PhoneMinOrderByAggregateInput } from './phone-min-order-by-aggregate.input';

@InputType()
export class PhoneOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @HideField()
    borrowerId?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
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
