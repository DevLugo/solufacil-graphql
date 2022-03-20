import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ContractTypeSumAggregate {

    @Field(() => Int, {nullable:true})
    monthDuration?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    amount?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    maxRate?: any;
}
