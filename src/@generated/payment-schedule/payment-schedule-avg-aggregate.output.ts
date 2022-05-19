import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class PaymentScheduleAvgAggregate {

    @Field(() => Float, {nullable:true})
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
