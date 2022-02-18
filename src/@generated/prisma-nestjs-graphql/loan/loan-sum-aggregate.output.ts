import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class LoanSumAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    weeklyPaymentAmount?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    amountToPay?: any;
}
