import { LoanPaymentCreateWithoutLoanInput } from './loan-payment-create-without-loan.input';
import { LoanPaymentCreateOrConnectWithoutLoanInput } from './loan-payment-create-or-connect-without-loan.input';
import { LoanPaymentUpsertWithWhereUniqueWithoutLoanInput } from './loan-payment-upsert-with-where-unique-without-loan.input';
import { LoanPaymentCreateManyLoanInputEnvelope } from './loan-payment-create-many-loan-input-envelope.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithWhereUniqueWithoutLoanInput } from './loan-payment-update-with-where-unique-without-loan.input';
import { LoanPaymentUpdateManyWithWhereWithoutLoanInput } from './loan-payment-update-many-with-where-without-loan.input';
import { LoanPaymentScalarWhereInput } from './loan-payment-scalar-where.input';
export declare class LoanPaymentUncheckedUpdateManyWithoutLoanInput {
    create?: Array<LoanPaymentCreateWithoutLoanInput>;
    connectOrCreate?: Array<LoanPaymentCreateOrConnectWithoutLoanInput>;
    upsert?: Array<LoanPaymentUpsertWithWhereUniqueWithoutLoanInput>;
    createMany?: LoanPaymentCreateManyLoanInputEnvelope;
    set?: Array<LoanPaymentWhereUniqueInput>;
    disconnect?: Array<LoanPaymentWhereUniqueInput>;
    delete?: Array<LoanPaymentWhereUniqueInput>;
    connect?: Array<LoanPaymentWhereUniqueInput>;
    update?: Array<LoanPaymentUpdateWithWhereUniqueWithoutLoanInput>;
    updateMany?: Array<LoanPaymentUpdateManyWithWhereWithoutLoanInput>;
    deleteMany?: Array<LoanPaymentScalarWhereInput>;
}
