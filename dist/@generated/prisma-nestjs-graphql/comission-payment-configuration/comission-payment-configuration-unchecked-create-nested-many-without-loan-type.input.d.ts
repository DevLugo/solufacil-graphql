import { ComissionPaymentConfigurationCreateWithoutLoanTypeInput } from './comission-payment-configuration-create-without-loan-type.input';
import { ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput } from './comission-payment-configuration-create-or-connect-without-loan-type.input';
import { ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope } from './comission-payment-configuration-create-many-loan-type-input-envelope.input';
import { ComissionPaymentConfigurationWhereUniqueInput } from './comission-payment-configuration-where-unique.input';
export declare class ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput {
    create?: Array<ComissionPaymentConfigurationCreateWithoutLoanTypeInput>;
    connectOrCreate?: Array<ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput>;
    createMany?: ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope;
    connect?: Array<ComissionPaymentConfigurationWhereUniqueInput>;
}
