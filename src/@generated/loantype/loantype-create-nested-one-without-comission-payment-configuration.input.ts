import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoantypeCreateWithoutComissionPaymentConfigurationInput } from './loantype-create-without-comission-payment-configuration.input';
import { LoantypeCreateOrConnectWithoutComissionPaymentConfigurationInput } from './loantype-create-or-connect-without-comission-payment-configuration.input';
import { LoantypeWhereUniqueInput } from './loantype-where-unique.input';

@InputType()
export class LoantypeCreateNestedOneWithoutComissionPaymentConfigurationInput {

    @Field(() => LoantypeCreateWithoutComissionPaymentConfigurationInput, {nullable:true})
    create?: LoantypeCreateWithoutComissionPaymentConfigurationInput;

    @Field(() => LoantypeCreateOrConnectWithoutComissionPaymentConfigurationInput, {nullable:true})
    connectOrCreate?: LoantypeCreateOrConnectWithoutComissionPaymentConfigurationInput;

    @Field(() => LoantypeWhereUniqueInput, {nullable:true})
    connect?: LoantypeWhereUniqueInput;
}
