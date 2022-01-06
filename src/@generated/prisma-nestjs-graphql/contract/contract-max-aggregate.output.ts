import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ContractMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    amount?: Prisma.Decimal;

    @Field(() => String, {nullable:true})
    borrowerId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    employeeId?: string;
}
