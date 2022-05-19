import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationWhereUniqueInput } from './comission-payment-configuration-where-unique.input';

@ArgsType()
export class FindUniqueComissionPaymentConfigurationArgs {

    @Field(() => ComissionPaymentConfigurationWhereUniqueInput, {nullable:false})
    where!: ComissionPaymentConfigurationWhereUniqueInput;
}
