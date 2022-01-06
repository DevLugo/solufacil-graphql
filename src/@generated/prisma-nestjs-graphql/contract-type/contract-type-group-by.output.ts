import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ContractTypeCountAggregate } from './contract-type-count-aggregate.output';
import { ContractTypeAvgAggregate } from './contract-type-avg-aggregate.output';
import { ContractTypeSumAggregate } from './contract-type-sum-aggregate.output';
import { ContractTypeMinAggregate } from './contract-type-min-aggregate.output';
import { ContractTypeMaxAggregate } from './contract-type-max-aggregate.output';

@ObjectType()
export class ContractTypeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    weekDuration!: number;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    rate!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
