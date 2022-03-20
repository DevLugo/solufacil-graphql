import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ContractTypeAvgAggregate {

    @Field(() => Float, {nullable:true})
    monthDuration?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    amount?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    maxRate?: any;
}
