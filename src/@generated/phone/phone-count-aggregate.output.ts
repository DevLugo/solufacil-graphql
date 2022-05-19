import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PhoneCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    number!: number;

    @Field(() => Int, {nullable:false})
    borrowerId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    avalId!: number;

    @Field(() => Int, {nullable:false})
    employeeId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
