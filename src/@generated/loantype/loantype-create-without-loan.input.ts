import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ComissionPaymentConfigurationCreateNestedManyWithoutLoanTypeInput } from '../comission-payment-configuration/comission-payment-configuration-create-nested-many-without-loan-type.input';

@InputType()
export class LoantypeCreateWithoutLoanInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    weekDuration!: number;

    @Field(() => Float, {nullable:false})
    rate!: number;

    @Field(() => Float, {nullable:false})
    overdueRate!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ComissionPaymentConfigurationCreateNestedManyWithoutLoanTypeInput, {nullable:true})
    ComissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLoanTypeInput;
}