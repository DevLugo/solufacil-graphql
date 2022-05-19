import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationCreateManyInput } from './comission-payment-configuration-create-many.input';

@ArgsType()
export class CreateManyComissionPaymentConfigurationArgs {

    @Field(() => [ComissionPaymentConfigurationCreateManyInput], {nullable:false})
    data!: Array<ComissionPaymentConfigurationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
