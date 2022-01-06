import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ContractType {

    @Field(() => ID, {nullable:false})
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
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
