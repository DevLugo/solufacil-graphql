import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ContractCountOrderByAggregateInput } from './contract-count-order-by-aggregate.input';
import { ContractMaxOrderByAggregateInput } from './contract-max-order-by-aggregate.input';
import { ContractMinOrderByAggregateInput } from './contract-min-order-by-aggregate.input';

@InputType()
export class ContractOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    borrowerId?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dueDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    signDate?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contractTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    loanLeadId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => ContractCountOrderByAggregateInput, {nullable:true})
    _count?: ContractCountOrderByAggregateInput;

    @Field(() => ContractMaxOrderByAggregateInput, {nullable:true})
    _max?: ContractMaxOrderByAggregateInput;

    @Field(() => ContractMinOrderByAggregateInput, {nullable:true})
    _min?: ContractMinOrderByAggregateInput;
}
