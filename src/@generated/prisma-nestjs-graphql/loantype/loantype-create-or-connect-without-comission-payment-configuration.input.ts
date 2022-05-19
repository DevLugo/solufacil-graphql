import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoantypeWhereUniqueInput } from './loantype-where-unique.input';
import { LoantypeCreateWithoutComissionPaymentConfigurationInput } from './loantype-create-without-comission-payment-configuration.input';

@InputType()
export class LoantypeCreateOrConnectWithoutComissionPaymentConfigurationInput {

    @Field(() => LoantypeWhereUniqueInput, {nullable:false})
    where!: LoantypeWhereUniqueInput;

    @Field(() => LoantypeCreateWithoutComissionPaymentConfigurationInput, {nullable:false})
    create!: LoantypeCreateWithoutComissionPaymentConfigurationInput;
}
