import { CommissionPaymentCreateWithoutLoanInput } from './commission-payment-create-without-loan.input';
import { CommissionPaymentCreateOrConnectWithoutLoanInput } from './commission-payment-create-or-connect-without-loan.input';
import { CommissionPaymentUpsertWithWhereUniqueWithoutLoanInput } from './commission-payment-upsert-with-where-unique-without-loan.input';
import { CommissionPaymentCreateManyLoanInputEnvelope } from './commission-payment-create-many-loan-input-envelope.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentUpdateWithWhereUniqueWithoutLoanInput } from './commission-payment-update-with-where-unique-without-loan.input';
import { CommissionPaymentUpdateManyWithWhereWithoutLoanInput } from './commission-payment-update-many-with-where-without-loan.input';
import { CommissionPaymentScalarWhereInput } from './commission-payment-scalar-where.input';
export declare class CommissionPaymentUncheckedUpdateManyWithoutLoanInput {
    create?: Array<CommissionPaymentCreateWithoutLoanInput>;
    connectOrCreate?: Array<CommissionPaymentCreateOrConnectWithoutLoanInput>;
    upsert?: Array<CommissionPaymentUpsertWithWhereUniqueWithoutLoanInput>;
    createMany?: CommissionPaymentCreateManyLoanInputEnvelope;
    set?: Array<CommissionPaymentWhereUniqueInput>;
    disconnect?: Array<CommissionPaymentWhereUniqueInput>;
    delete?: Array<CommissionPaymentWhereUniqueInput>;
    connect?: Array<CommissionPaymentWhereUniqueInput>;
    update?: Array<CommissionPaymentUpdateWithWhereUniqueWithoutLoanInput>;
    updateMany?: Array<CommissionPaymentUpdateManyWithWhereWithoutLoanInput>;
    deleteMany?: Array<CommissionPaymentScalarWhereInput>;
}
