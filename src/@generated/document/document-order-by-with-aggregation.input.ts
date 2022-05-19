import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DocumentCountOrderByAggregateInput } from './document-count-order-by-aggregate.input';
import { DocumentMaxOrderByAggregateInput } from './document-max-order-by-aggregate.input';
import { DocumentMinOrderByAggregateInput } from './document-min-order-by-aggregate.input';

@InputType()
export class DocumentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    borrowerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contractId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => DocumentCountOrderByAggregateInput, {nullable:true})
    _count?: DocumentCountOrderByAggregateInput;

    @Field(() => DocumentMaxOrderByAggregateInput, {nullable:true})
    _max?: DocumentMaxOrderByAggregateInput;

    @Field(() => DocumentMinOrderByAggregateInput, {nullable:true})
    _min?: DocumentMinOrderByAggregateInput;
}
