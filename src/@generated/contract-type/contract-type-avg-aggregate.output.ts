import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ContractTypeAvgAggregate {

    @Field(() => Float, {nullable:true})
    monthDuration?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    amount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    maxRate?: Decimal;
}
