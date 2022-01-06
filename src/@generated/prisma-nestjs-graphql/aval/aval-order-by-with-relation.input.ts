import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PhoneOrderByRelationAggregateInput } from '../phone/phone-order-by-relation-aggregate.input';
import { DocumentOrderByRelationAggregateInput } from '../document/document-order-by-relation-aggregate.input';

@InputType()
export class AvalOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => PhoneOrderByRelationAggregateInput, {nullable:true})
    phones?: PhoneOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fullName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => DocumentOrderByRelationAggregateInput, {nullable:true})
    documents?: DocumentOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
