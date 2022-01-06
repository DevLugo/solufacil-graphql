import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class LoantypeAvgAggregate {

    @Field(() => Float, {nullable:true})
    weekDuration?: number;

    @Field(() => Float, {nullable:true})
    MaxAmount?: number;

    @Field(() => Float, {nullable:true})
    rate?: number;

    @Field(() => Float, {nullable:true})
    overdueRate?: number;
}
