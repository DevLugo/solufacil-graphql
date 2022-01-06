import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class LoanPaymentSumAggregate {

    @Field(() => Int, {nullable:true})
    numeration?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    amount?: any;
}
