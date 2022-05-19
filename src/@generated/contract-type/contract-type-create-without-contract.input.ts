import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@InputType()
export class ContractTypeCreateWithoutContractInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;

    @Field(() => Int, {nullable:false})
    monthDuration!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    maxRate!: Decimal;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
