import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@ObjectType()
export class ContractCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    amount!: Prisma.Decimal;

    @Field(() => Int, {nullable:false})
    borrowerId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    employeeId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
