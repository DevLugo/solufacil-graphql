import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ContractAvgAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    amount?: Prisma.Decimal;
}
