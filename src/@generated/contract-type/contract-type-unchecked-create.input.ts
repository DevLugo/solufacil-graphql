import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { HideField } from '@nestjs/graphql';
import { ContractUncheckedCreateNestedManyWithoutContractTypeInput } from '../contract/contract-unchecked-create-nested-many-without-contract-type.input';

@InputType()
export class ContractTypeUncheckedCreateInput {

    @Field(() => String, {nullable:true})
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

    @Field(() => ContractUncheckedCreateNestedManyWithoutContractTypeInput, {nullable:true})
    contract?: ContractUncheckedCreateNestedManyWithoutContractTypeInput;
}
