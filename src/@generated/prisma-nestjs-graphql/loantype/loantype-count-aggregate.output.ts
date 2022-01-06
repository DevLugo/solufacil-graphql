import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LoantypeCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    weekDuration!: number;

    @Field(() => Int, {nullable:false})
    MaxAmount!: number;

    @Field(() => Int, {nullable:false})
    rate!: number;

    @Field(() => Int, {nullable:false})
    overdueRate!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
