import { LoanPaymentCreateWithoutLoanInput } from './loan-payment-create-without-loan.input';
import { LoanPaymentCreateOrConnectWithoutLoanInput } from './loan-payment-create-or-connect-without-loan.input';
import { LoanPaymentCreateManyLoanInputEnvelope } from './loan-payment-create-many-loan-input-envelope.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
export declare class LoanPaymentUncheckedCreateNestedManyWithoutLoanInput {
    create?: Array<LoanPaymentCreateWithoutLoanInput>;
    connectOrCreate?: Array<LoanPaymentCreateOrConnectWithoutLoanInput>;
    createMany?: LoanPaymentCreateManyLoanInputEnvelope;
    connect?: Array<LoanPaymentWhereUniqueInput>;
}
