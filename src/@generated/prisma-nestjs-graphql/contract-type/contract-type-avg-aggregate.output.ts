import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ContractTypeAvgAggregate {

    @Field(() => Float, {nullable:true})
    weekDuration?: number;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    rate?: number;
}
