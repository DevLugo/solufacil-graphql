import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class LoanAvgAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    amount?: any;
}
