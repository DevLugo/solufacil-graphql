import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationCreateInput } from './comission-payment-configuration-create.input';

@ArgsType()
export class CreateOneComissionPaymentConfigurationArgs {

    @Field(() => ComissionPaymentConfigurationCreateInput, {nullable:false})
    data!: ComissionPaymentConfigurationCreateInput;
}
