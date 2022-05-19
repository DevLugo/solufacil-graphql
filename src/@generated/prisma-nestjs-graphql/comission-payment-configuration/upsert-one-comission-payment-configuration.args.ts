import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationWhereUniqueInput } from './comission-payment-configuration-where-unique.input';
import { ComissionPaymentConfigurationCreateInput } from './comission-payment-configuration-create.input';
import { ComissionPaymentConfigurationUpdateInput } from './comission-payment-configuration-update.input';

@ArgsType()
export class UpsertOneComissionPaymentConfigurationArgs {

    @Field(() => ComissionPaymentConfigurationWhereUniqueInput, {nullable:false})
    where!: ComissionPaymentConfigurationWhereUniqueInput;

    @Field(() => ComissionPaymentConfigurationCreateInput, {nullable:false})
    create!: ComissionPaymentConfigurationCreateInput;

    @Field(() => ComissionPaymentConfigurationUpdateInput, {nullable:false})
    update!: ComissionPaymentConfigurationUpdateInput;
}
