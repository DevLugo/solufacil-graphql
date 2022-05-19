import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationWhereInput } from './comission-payment-configuration-where.input';

@ArgsType()
export class DeleteManyComissionPaymentConfigurationArgs {

    @Field(() => ComissionPaymentConfigurationWhereInput, {nullable:true})
    where?: ComissionPaymentConfigurationWhereInput;
}
