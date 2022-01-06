import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { Prisma } from '@prisma/client';
import { HideField } from '@nestjs/graphql';
import { ContractCountOrderByAggregateInput } from './contract-count-order-by-aggregate.input';
import { ContractAvgOrderByAggregateInput } from './contract-avg-order-by-aggregate.input';
import { ContractMaxOrderByAggregateInput } from './contract-max-order-by-aggregate.input';
import { ContractMinOrderByAggregateInput } from './contract-min-order-by-aggregate.input';
import { ContractSumOrderByAggregateInput } from './contract-sum-order-by-aggregate.input';

@InputType()
export class ContractOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: Prisma.Decimal;

    @Field(() => SortOrder, {nullable:true})
    borrowerId?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => ContractCountOrderByAggregateInput, {nullable:true})
    _count?: ContractCountOrderByAggregateInput;

    @Field(() => ContractAvgOrderByAggregateInput, {nullable:true})
    _avg?: ContractAvgOrderByAggregateInput;

    @Field(() => ContractMaxOrderByAggregateInput, {nullable:true})
    _max?: ContractMaxOrderByAggregateInput;

    @Field(() => ContractMinOrderByAggregateInput, {nullable:true})
    _min?: ContractMinOrderByAggregateInput;

    @Field(() => ContractSumOrderByAggregateInput, {nullable:true})
    _sum?: ContractSumOrderByAggregateInput;
}
