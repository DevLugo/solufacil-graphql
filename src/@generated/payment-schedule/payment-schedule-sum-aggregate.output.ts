import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class PaymentScheduleSumAggregate {

    @Field(() => Int, {nullable:true})
    numeration?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    amountToPay?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    paidAmount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    returnToCapital?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    profit?: Decimal;
}
