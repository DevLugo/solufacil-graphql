import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationUpdateInput } from './comission-payment-configuration-update.input';
import { ComissionPaymentConfigurationWhereUniqueInput } from './comission-payment-configuration-where-unique.input';

@ArgsType()
export class UpdateOneComissionPaymentConfigurationArgs {

    @Field(() => ComissionPaymentConfigurationUpdateInput, {nullable:false})
    data!: ComissionPaymentConfigurationUpdateInput;

    @Field(() => ComissionPaymentConfigurationWhereUniqueInput, {nullable:false})
    where!: ComissionPaymentConfigurationWhereUniqueInput;
}
