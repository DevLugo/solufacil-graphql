import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class ContractTypeCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    name!: string;

    @Field(() => Int, {nullable:false})
    weekDuration!: number;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    rate!: number;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
