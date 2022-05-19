import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { LoanUncheckedCreateNestedManyWithoutLoanTypeInput } from '../loan/loan-unchecked-create-nested-many-without-loan-type.input';
import { ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput } from '../comission-payment-configuration/comission-payment-configuration-unchecked-create-nested-many-without-loan-type.input';

@InputType()
export class LoantypeUncheckedCreateInput {

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

    @Field(() => LoanUncheckedCreateNestedManyWithoutLoanTypeInput, {nullable:true})
    Loan?: LoanUncheckedCreateNestedManyWithoutLoanTypeInput;

    @Field(() => ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput, {nullable:true})
    ComissionPaymentConfiguration?: ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput;
}
