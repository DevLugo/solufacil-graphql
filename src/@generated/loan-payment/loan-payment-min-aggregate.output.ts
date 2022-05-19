import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class LoanPaymentMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    amount?: Decimal;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => String, {nullable:true})
    comments?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    loanId?: string;

    @Field(() => String, {nullable:true})
    employeeId?: string;
}
