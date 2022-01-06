import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class LoanPaymentAvgAggregate {

    @Field(() => Float, {nullable:true})
    numeration?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    amount?: any;
}
