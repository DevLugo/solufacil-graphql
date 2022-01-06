import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DocumentCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    borrowerId!: number;

    @Field(() => Int, {nullable:false})
    avalId!: number;

    @Field(() => Int, {nullable:false})
    contractId!: number;

    @Field(() => Int, {nullable:false})
    employeeId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
