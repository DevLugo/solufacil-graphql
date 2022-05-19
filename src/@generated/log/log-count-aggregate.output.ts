import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LogCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    requestBody!: number;

    @Field(() => Int, {nullable:false})
    requestType!: number;

    @Field(() => Int, {nullable:false})
    deviceType!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    systemSectionId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}