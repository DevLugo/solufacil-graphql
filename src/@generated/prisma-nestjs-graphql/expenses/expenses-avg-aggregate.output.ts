import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ExpensesAvgAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    amountToPay?: any;
}
