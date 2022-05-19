import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PhoneOrderByRelationAggregateInput } from '../phone/phone-order-by-relation-aggregate.input';
import { DocumentOrderByRelationAggregateInput } from '../document/document-order-by-relation-aggregate.input';
import { HideField } from '@nestjs/graphql';
import { ContractOrderByRelationAggregateInput } from '../contract/contract-order-by-relation-aggregate.input';
import { LocalOrderByRelationAggregateInput } from '../local/local-order-by-relation-aggregate.input';

@InputType()
export class BorrowerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => PhoneOrderByRelationAggregateInput, {nullable:true})
    phones?: PhoneOrderByRelationAggregateInput;

    @Field(() => DocumentOrderByRelationAggregateInput, {nullable:true})
    documents?: DocumentOrderByRelationAggregateInput;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ContractOrderByRelationAggregateInput, {nullable:true})
    Contract?: ContractOrderByRelationAggregateInput;

    @Field(() => LocalOrderByRelationAggregateInput, {nullable:true})
    Local?: LocalOrderByRelationAggregateInput;
}
