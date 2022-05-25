import { ComissionPaymentConfigurationCreateWithoutLoanTypeInput } from './comission-payment-configuration-create-without-loan-type.input';
import { ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput } from './comission-payment-configuration-create-or-connect-without-loan-type.input';
import { ComissionPaymentConfigurationUpsertWithWhereUniqueWithoutLoanTypeInput } from './comission-payment-configuration-upsert-with-where-unique-without-loan-type.input';
import { ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope } from './comission-payment-configuration-create-many-loan-type-input-envelope.input';
import { ComissionPaymentConfigurationWhereUniqueInput } from './comission-payment-configuration-where-unique.input';
import { ComissionPaymentConfigurationUpdateWithWhereUniqueWithoutLoanTypeInput } from './comission-payment-configuration-update-with-where-unique-without-loan-type.input';
import { ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput } from './comission-payment-configuration-update-many-with-where-without-loan-type.input';
import { ComissionPaymentConfigurationScalarWhereInput } from './comission-payment-configuration-scalar-where.input';
export declare class ComissionPaymentConfigurationUpdateManyWithoutLoanTypeInput {
    create?: Array<ComissionPaymentConfigurationCreateWithoutLoanTypeInput>;
    connectOrCreate?: Array<ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput>;
    upsert?: Array<ComissionPaymentConfigurationUpsertWithWhereUniqueWithoutLoanTypeInput>;
    createMany?: ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope;
    set?: Array<ComissionPaymentConfigurationWhereUniqueInput>;
    disconnect?: Array<ComissionPaymentConfigurationWhereUniqueInput>;
    delete?: Array<ComissionPaymentConfigurationWhereUniqueInput>;
    connect?: Array<ComissionPaymentConfigurationWhereUniqueInput>;
    update?: Array<ComissionPaymentConfigurationUpdateWithWhereUniqueWithoutLoanTypeInput>;
    updateMany?: Array<ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput>;
    deleteMany?: Array<ComissionPaymentConfigurationScalarWhereInput>;
}
