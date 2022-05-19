import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationWhereUniqueInput } from './comission-payment-configuration-where-unique.input';
import { ComissionPaymentConfigurationUpdateWithoutLoanTypeInput } from './comission-payment-configuration-update-without-loan-type.input';
import { ComissionPaymentConfigurationCreateWithoutLoanTypeInput } from './comission-payment-configuration-create-without-loan-type.input';

@InputType()
export class ComissionPaymentConfigurationUpsertWithWhereUniqueWithoutLoanTypeInput {

    @Field(() => ComissionPaymentConfigurationWhereUniqueInput, {nullable:false})
    where!: ComissionPaymentConfigurationWhereUniqueInput;

    @Field(() => ComissionPaymentConfigurationUpdateWithoutLoanTypeInput, {nullable:false})
    update!: ComissionPaymentConfigurationUpdateWithoutLoanTypeInput;

    @Field(() => ComissionPaymentConfigurationCreateWithoutLoanTypeInput, {nullable:false})
    create!: ComissionPaymentConfigurationCreateWithoutLoanTypeInput;
}
