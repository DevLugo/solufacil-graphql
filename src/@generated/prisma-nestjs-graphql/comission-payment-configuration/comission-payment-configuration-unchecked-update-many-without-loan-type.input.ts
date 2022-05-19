import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationCreateWithoutLoanTypeInput } from './comission-payment-configuration-create-without-loan-type.input';
import { ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput } from './comission-payment-configuration-create-or-connect-without-loan-type.input';
import { ComissionPaymentConfigurationUpsertWithWhereUniqueWithoutLoanTypeInput } from './comission-payment-configuration-upsert-with-where-unique-without-loan-type.input';
import { ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope } from './comission-payment-configuration-create-many-loan-type-input-envelope.input';
import { ComissionPaymentConfigurationWhereUniqueInput } from './comission-payment-configuration-where-unique.input';
import { ComissionPaymentConfigurationUpdateWithWhereUniqueWithoutLoanTypeInput } from './comission-payment-configuration-update-with-where-unique-without-loan-type.input';
import { ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput } from './comission-payment-configuration-update-many-with-where-without-loan-type.input';
import { ComissionPaymentConfigurationScalarWhereInput } from './comission-payment-configuration-scalar-where.input';

@InputType()
export class ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput {

    @Field(() => [ComissionPaymentConfigurationCreateWithoutLoanTypeInput], {nullable:true})
    create?: Array<ComissionPaymentConfigurationCreateWithoutLoanTypeInput>;

    @Field(() => [ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput], {nullable:true})
    connectOrCreate?: Array<ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput>;

    @Field(() => [ComissionPaymentConfigurationUpsertWithWhereUniqueWithoutLoanTypeInput], {nullable:true})
    upsert?: Array<ComissionPaymentConfigurationUpsertWithWhereUniqueWithoutLoanTypeInput>;

    @Field(() => ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope, {nullable:true})
    createMany?: ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope;

    @Field(() => [ComissionPaymentConfigurationWhereUniqueInput], {nullable:true})
    set?: Array<ComissionPaymentConfigurationWhereUniqueInput>;

    @Field(() => [ComissionPaymentConfigurationWhereUniqueInput], {nullable:true})
    disconnect?: Array<ComissionPaymentConfigurationWhereUniqueInput>;

    @Field(() => [ComissionPaymentConfigurationWhereUniqueInput], {nullable:true})
    delete?: Array<ComissionPaymentConfigurationWhereUniqueInput>;

    @Field(() => [ComissionPaymentConfigurationWhereUniqueInput], {nullable:true})
    connect?: Array<ComissionPaymentConfigurationWhereUniqueInput>;

    @Field(() => [ComissionPaymentConfigurationUpdateWithWhereUniqueWithoutLoanTypeInput], {nullable:true})
    update?: Array<ComissionPaymentConfigurationUpdateWithWhereUniqueWithoutLoanTypeInput>;

    @Field(() => [ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput], {nullable:true})
    updateMany?: Array<ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput>;

    @Field(() => [ComissionPaymentConfigurationScalarWhereInput], {nullable:true})
    deleteMany?: Array<ComissionPaymentConfigurationScalarWhereInput>;
}
