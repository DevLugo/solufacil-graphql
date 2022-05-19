import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ContractTypeSumAggregate {

    @Field(() => Int, {nullable:true})
    monthDuration?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    amount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    maxRate?: Decimal;
}
