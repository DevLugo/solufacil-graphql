import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { ContractCountAggregate } from './contract-count-aggregate.output';
import { ContractAvgAggregate } from './contract-avg-aggregate.output';
import { ContractSumAggregate } from './contract-sum-aggregate.output';
import { ContractMinAggregate } from './contract-min-aggregate.output';
import { ContractMaxAggregate } from './contract-max-aggregate.output';

@ObjectType()
export class ContractGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Prisma.Decimal;

    @Field(() => String, {nullable:true})
    borrowerId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    employeeId?: string;

    @Field(() => ContractCountAggregate, {nullable:true})
    _count?: ContractCountAggregate;

    @Field(() => ContractAvgAggregate, {nullable:true})
    _avg?: ContractAvgAggregate;

    @Field(() => ContractSumAggregate, {nullable:true})
    _sum?: ContractSumAggregate;

    @Field(() => ContractMinAggregate, {nullable:true})
    _min?: ContractMinAggregate;

    @Field(() => ContractMaxAggregate, {nullable:true})
    _max?: ContractMaxAggregate;
}
