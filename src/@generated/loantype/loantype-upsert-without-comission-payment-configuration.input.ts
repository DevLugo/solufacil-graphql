import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoantypeUpdateWithoutComissionPaymentConfigurationInput } from './loantype-update-without-comission-payment-configuration.input';
import { LoantypeCreateWithoutComissionPaymentConfigurationInput } from './loantype-create-without-comission-payment-configuration.input';

@InputType()
export class LoantypeUpsertWithoutComissionPaymentConfigurationInput {

    @Field(() => LoantypeUpdateWithoutComissionPaymentConfigurationInput, {nullable:false})
    update!: LoantypeUpdateWithoutComissionPaymentConfigurationInput;

    @Field(() => LoantypeCreateWithoutComissionPaymentConfigurationInput, {nullable:false})
    create!: LoantypeCreateWithoutComissionPaymentConfigurationInput;
}
