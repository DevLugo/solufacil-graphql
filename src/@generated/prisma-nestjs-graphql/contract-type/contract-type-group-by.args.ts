import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractTypeWhereInput } from './contract-type-where.input';
import { ContractTypeOrderByWithAggregationInput } from './contract-type-order-by-with-aggregation.input';
import { ContractTypeScalarFieldEnum } from './contract-type-scalar-field.enum';
import { ContractTypeScalarWhereWithAggregatesInput } from './contract-type-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ContractTypeCountAggregateInput } from './contract-type-count-aggregate.input';
import { ContractTypeAvgAggregateInput } from './contract-type-avg-aggregate.input';
import { ContractTypeSumAggregateInput } from './contract-type-sum-aggregate.input';
import { ContractTypeMinAggregateInput } from './contract-type-min-aggregate.input';
import { ContractTypeMaxAggregateInput } from './contract-type-max-aggregate.input';

@ArgsType()
export class ContractTypeGroupByArgs {

    @Field(() => ContractTypeWhereInput, {nullable:true})
    where?: ContractTypeWhereInput;

    @Field(() => [ContractTypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ContractTypeOrderByWithAggregationInput>;

    @Field(() => [ContractTypeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ContractTypeScalarFieldEnum>;

    @Field(() => ContractTypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: ContractTypeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ContractTypeCountAggregateInput, {nullable:true})
    _count?: ContractTypeCountAggregateInput;

    @Field(() => ContractTypeAvgAggregateInput, {nullable:true})
    _avg?: ContractTypeAvgAggregateInput;

    @Field(() => ContractTypeSumAggregateInput, {nullable:true})
    _sum?: ContractTypeSumAggregateInput;

    @Field(() => ContractTypeMinAggregateInput, {nullable:true})
    _min?: ContractTypeMinAggregateInput;

    @Field(() => ContractTypeMaxAggregateInput, {nullable:true})
    _max?: ContractTypeMaxAggregateInput;
}
