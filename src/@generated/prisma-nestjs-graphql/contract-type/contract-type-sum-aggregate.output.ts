import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ContractTypeSumAggregate {

    @Field(() => Int, {nullable:true})
    weekDuration?: number;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    rate?: number;
}
