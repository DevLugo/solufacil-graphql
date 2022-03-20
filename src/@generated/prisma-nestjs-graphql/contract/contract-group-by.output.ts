import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContractCountAggregate } from './contract-count-aggregate.output';
import { ContractMinAggregate } from './contract-min-aggregate.output';
import { ContractMaxAggregate } from './contract-max-aggregate.output';

@ObjectType()
export class ContractGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    borrowerId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => Date, {nullable:false})
    signDate!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    employeeId!: string;

    @Field(() => String, {nullable:false})
    contractTypeId!: string;

    @Field(() => ContractCountAggregate, {nullable:true})
    _count?: ContractCountAggregate;

    @Field(() => ContractMinAggregate, {nullable:true})
    _min?: ContractMinAggregate;

    @Field(() => ContractMaxAggregate, {nullable:true})
    _max?: ContractMaxAggregate;
}
