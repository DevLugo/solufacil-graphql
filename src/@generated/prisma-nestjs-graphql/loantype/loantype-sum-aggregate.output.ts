import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class LoantypeSumAggregate {

    @Field(() => Int, {nullable:true})
    weekDuration?: number;

    @Field(() => Float, {nullable:true})
    MaxAmount?: number;

    @Field(() => Float, {nullable:true})
    rate?: number;

    @Field(() => Float, {nullable:true})
    overdueRate?: number;
}
