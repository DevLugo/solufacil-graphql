import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SystemSectionCountOrderByAggregateInput } from './system-section-count-order-by-aggregate.input';
import { SystemSectionMaxOrderByAggregateInput } from './system-section-max-order-by-aggregate.input';
import { SystemSectionMinOrderByAggregateInput } from './system-section-min-order-by-aggregate.input';

@InputType()
export class SystemSectionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SystemSectionCountOrderByAggregateInput, {nullable:true})
    _count?: SystemSectionCountOrderByAggregateInput;

    @Field(() => SystemSectionMaxOrderByAggregateInput, {nullable:true})
    _max?: SystemSectionMaxOrderByAggregateInput;

    @Field(() => SystemSectionMinOrderByAggregateInput, {nullable:true})
    _min?: SystemSectionMinOrderByAggregateInput;
}
