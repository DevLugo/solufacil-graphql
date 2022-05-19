import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationWhereInput } from './comission-payment-configuration-where.input';

@InputType()
export class ComissionPaymentConfigurationListRelationFilter {

    @Field(() => ComissionPaymentConfigurationWhereInput, {nullable:true})
    every?: ComissionPaymentConfigurationWhereInput;

    @Field(() => ComissionPaymentConfigurationWhereInput, {nullable:true})
    some?: ComissionPaymentConfigurationWhereInput;

    @Field(() => ComissionPaymentConfigurationWhereInput, {nullable:true})
    none?: ComissionPaymentConfigurationWhereInput;
}
