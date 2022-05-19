import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ExpensesAvgAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    amountToPay?: Decimal;
}
