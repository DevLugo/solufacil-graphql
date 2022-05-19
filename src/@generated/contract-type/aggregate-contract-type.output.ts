import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContractTypeCountAggregate } from './contract-type-count-aggregate.output';
import { ContractTypeAvgAggregate } from './contract-type-avg-aggregate.output';
import { ContractTypeSumAggregate } from './contract-type-sum-aggregate.output';
import { ContractTypeMinAggregate } from './contract-type-min-aggregate.output';
import { ContractTypeMaxAggregate } from './contract-type-max-aggregate.output';

@ObjectType()
export class AggregateContractType {

    @Field(() => ContractTypeCountAggregate, {nullable:true})
    _count?: ContractTypeCountAggregate;

    @Field(() => ContractTypeAvgAggregate, {nullable:true})
    _avg?: ContractTypeAvgAggregate;

    @Field(() => ContractTypeSumAggregate, {nullable:true})
    _sum?: ContractTypeSumAggregate;

    @Field(() => ContractTypeMinAggregate, {nullable:true})
    _min?: ContractTypeMinAggregate;

    @Field(() => ContractTypeMaxAggregate, {nullable:true})
    _max?: ContractTypeMaxAggregate;
}
