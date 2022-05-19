import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationScalarWhereInput } from './comission-payment-configuration-scalar-where.input';
import { ComissionPaymentConfigurationUpdateManyMutationInput } from './comission-payment-configuration-update-many-mutation.input';

@InputType()
export class ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput {

    @Field(() => ComissionPaymentConfigurationScalarWhereInput, {nullable:false})
    where!: ComissionPaymentConfigurationScalarWhereInput;

    @Field(() => ComissionPaymentConfigurationUpdateManyMutationInput, {nullable:false})
    data!: ComissionPaymentConfigurationUpdateManyMutationInput;
}
