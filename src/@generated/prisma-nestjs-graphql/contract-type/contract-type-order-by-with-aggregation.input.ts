import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ContractTypeCountOrderByAggregateInput } from './contract-type-count-order-by-aggregate.input';
import { ContractTypeAvgOrderByAggregateInput } from './contract-type-avg-order-by-aggregate.input';
import { ContractTypeMaxOrderByAggregateInput } from './contract-type-max-order-by-aggregate.input';
import { ContractTypeMinOrderByAggregateInput } from './contract-type-min-order-by-aggregate.input';
import { ContractTypeSumOrderByAggregateInput } from './contract-type-sum-order-by-aggregate.input';

@InputType()
export class ContractTypeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    monthDuration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maxRate?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ContractTypeCountOrderByAggregateInput, {nullable:true})
    _count?: ContractTypeCountOrderByAggregateInput;

    @Field(() => ContractTypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: ContractTypeAvgOrderByAggregateInput;

    @Field(() => ContractTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: ContractTypeMaxOrderByAggregateInput;

    @Field(() => ContractTypeMinOrderByAggregateInput, {nullable:true})
    _min?: ContractTypeMinOrderByAggregateInput;

    @Field(() => ContractTypeSumOrderByAggregateInput, {nullable:true})
    _sum?: ContractTypeSumOrderByAggregateInput;
}
