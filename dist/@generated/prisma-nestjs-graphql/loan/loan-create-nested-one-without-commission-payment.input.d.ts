import { LoanCreateWithoutCommissionPaymentInput } from './loan-create-without-commission-payment.input';
import { LoanCreateOrConnectWithoutCommissionPaymentInput } from './loan-create-or-connect-without-commission-payment.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
export declare class LoanCreateNestedOneWithoutCommissionPaymentInput {
    create?: LoanCreateWithoutCommissionPaymentInput;
    connectOrCreate?: LoanCreateOrConnectWithoutCommissionPaymentInput;
    connect?: LoanWhereUniqueInput;
}
