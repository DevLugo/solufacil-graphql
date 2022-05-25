import { CommissionPaymentCreateWithoutLoanInput } from './commission-payment-create-without-loan.input';
import { CommissionPaymentCreateOrConnectWithoutLoanInput } from './commission-payment-create-or-connect-without-loan.input';
import { CommissionPaymentCreateManyLoanInputEnvelope } from './commission-payment-create-many-loan-input-envelope.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
export declare class CommissionPaymentCreateNestedManyWithoutLoanInput {
    create?: Array<CommissionPaymentCreateWithoutLoanInput>;
    connectOrCreate?: Array<CommissionPaymentCreateOrConnectWithoutLoanInput>;
    createMany?: CommissionPaymentCreateManyLoanInputEnvelope;
    connect?: Array<CommissionPaymentWhereUniqueInput>;
}
