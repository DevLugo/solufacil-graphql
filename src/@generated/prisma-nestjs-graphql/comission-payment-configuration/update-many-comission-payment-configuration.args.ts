import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationUpdateManyMutationInput } from './comission-payment-configuration-update-many-mutation.input';
import { ComissionPaymentConfigurationWhereInput } from './comission-payment-configuration-where.input';

@ArgsType()
export class UpdateManyComissionPaymentConfigurationArgs {

    @Field(() => ComissionPaymentConfigurationUpdateManyMutationInput, {nullable:false})
    data!: ComissionPaymentConfigurationUpdateManyMutationInput;

    @Field(() => ComissionPaymentConfigurationWhereInput, {nullable:true})
    where?: ComissionPaymentConfigurationWhereInput;
}
