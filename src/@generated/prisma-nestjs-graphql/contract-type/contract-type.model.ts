import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Contract } from '../contract/contract.model';
import { ContractTypeCount } from './contract-type-count.output';

@ObjectType()
export class ContractType {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    monthDuration!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: any;

    @Field(() => GraphQLDecimal, {nullable:false})
    maxRate!: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => [Contract], {nullable:true})
    contract?: Array<Contract>;

    @Field(() => ContractTypeCount, {nullable:false})
    _count?: ContractTypeCount;
}
