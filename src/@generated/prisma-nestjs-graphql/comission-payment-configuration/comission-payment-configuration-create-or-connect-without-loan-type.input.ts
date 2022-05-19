import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationWhereUniqueInput } from './comission-payment-configuration-where-unique.input';
import { ComissionPaymentConfigurationCreateWithoutLoanTypeInput } from './comission-payment-configuration-create-without-loan-type.input';

@InputType()
export class ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput {

    @Field(() => ComissionPaymentConfigurationWhereUniqueInput, {nullable:false})
    where!: ComissionPaymentConfigurationWhereUniqueInput;

    @Field(() => ComissionPaymentConfigurationCreateWithoutLoanTypeInput, {nullable:false})
    create!: ComissionPaymentConfigurationCreateWithoutLoanTypeInput;
}
