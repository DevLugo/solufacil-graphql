import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationWhereUniqueInput } from './comission-payment-configuration-where-unique.input';
import { ComissionPaymentConfigurationUpdateWithoutLoanTypeInput } from './comission-payment-configuration-update-without-loan-type.input';

@InputType()
export class ComissionPaymentConfigurationUpdateWithWhereUniqueWithoutLoanTypeInput {

    @Field(() => ComissionPaymentConfigurationWhereUniqueInput, {nullable:false})
    where!: ComissionPaymentConfigurationWhereUniqueInput;

    @Field(() => ComissionPaymentConfigurationUpdateWithoutLoanTypeInput, {nullable:false})
    data!: ComissionPaymentConfigurationUpdateWithoutLoanTypeInput;
}
