import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationCreateWithoutLoanTypeInput } from './comission-payment-configuration-create-without-loan-type.input';
import { ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput } from './comission-payment-configuration-create-or-connect-without-loan-type.input';
import { ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope } from './comission-payment-configuration-create-many-loan-type-input-envelope.input';
import { ComissionPaymentConfigurationWhereUniqueInput } from './comission-payment-configuration-where-unique.input';

@InputType()
export class ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput {

    @Field(() => [ComissionPaymentConfigurationCreateWithoutLoanTypeInput], {nullable:true})
    create?: Array<ComissionPaymentConfigurationCreateWithoutLoanTypeInput>;

    @Field(() => [ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput], {nullable:true})
    connectOrCreate?: Array<ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput>;

    @Field(() => ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope, {nullable:true})
    createMany?: ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope;

    @Field(() => [ComissionPaymentConfigurationWhereUniqueInput], {nullable:true})
    connect?: Array<ComissionPaymentConfigurationWhereUniqueInput>;
}
