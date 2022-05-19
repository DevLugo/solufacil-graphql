import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoantypeCreateWithoutComissionPaymentConfigurationInput } from './loantype-create-without-comission-payment-configuration.input';
import { LoantypeCreateOrConnectWithoutComissionPaymentConfigurationInput } from './loantype-create-or-connect-without-comission-payment-configuration.input';
import { LoantypeUpsertWithoutComissionPaymentConfigurationInput } from './loantype-upsert-without-comission-payment-configuration.input';
import { LoantypeWhereUniqueInput } from './loantype-where-unique.input';
import { LoantypeUpdateWithoutComissionPaymentConfigurationInput } from './loantype-update-without-comission-payment-configuration.input';

@InputType()
export class LoantypeUpdateOneRequiredWithoutComissionPaymentConfigurationInput {

    @Field(() => LoantypeCreateWithoutComissionPaymentConfigurationInput, {nullable:true})
    create?: LoantypeCreateWithoutComissionPaymentConfigurationInput;

    @Field(() => LoantypeCreateOrConnectWithoutComissionPaymentConfigurationInput, {nullable:true})
    connectOrCreate?: LoantypeCreateOrConnectWithoutComissionPaymentConfigurationInput;

    @Field(() => LoantypeUpsertWithoutComissionPaymentConfigurationInput, {nullable:true})
    upsert?: LoantypeUpsertWithoutComissionPaymentConfigurationInput;

    @Field(() => LoantypeWhereUniqueInput, {nullable:true})
    connect?: LoantypeWhereUniqueInput;

    @Field(() => LoantypeUpdateWithoutComissionPaymentConfigurationInput, {nullable:true})
    update?: LoantypeUpdateWithoutComissionPaymentConfigurationInput;
}
