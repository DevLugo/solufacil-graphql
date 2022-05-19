import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LogCountOrderByAggregateInput } from './log-count-order-by-aggregate.input';
import { LogMaxOrderByAggregateInput } from './log-max-order-by-aggregate.input';
import { LogMinOrderByAggregateInput } from './log-min-order-by-aggregate.input';

@InputType()
export class LogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    requestBody?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    requestType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    systemSectionId?: keyof typeof SortOrder;

    @Field(() => LogCountOrderByAggregateInput, {nullable:true})
    _count?: LogCountOrderByAggregateInput;

    @Field(() => LogMaxOrderByAggregateInput, {nullable:true})
    _max?: LogMaxOrderByAggregateInput;

    @Field(() => LogMinOrderByAggregateInput, {nullable:true})
    _min?: LogMinOrderByAggregateInput;
}
