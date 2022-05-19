import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class LoanSumAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    weeklyPaymentAmount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    amountToPay?: Decimal;
}
