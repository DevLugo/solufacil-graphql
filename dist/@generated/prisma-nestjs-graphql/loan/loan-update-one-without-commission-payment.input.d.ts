import { LoanCreateWithoutCommissionPaymentInput } from './loan-create-without-commission-payment.input';
import { LoanCreateOrConnectWithoutCommissionPaymentInput } from './loan-create-or-connect-without-commission-payment.input';
import { LoanUpsertWithoutCommissionPaymentInput } from './loan-upsert-without-commission-payment.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithoutCommissionPaymentInput } from './loan-update-without-commission-payment.input';
export declare class LoanUpdateOneWithoutCommissionPaymentInput {
    create?: LoanCreateWithoutCommissionPaymentInput;
    connectOrCreate?: LoanCreateOrConnectWithoutCommissionPaymentInput;
    upsert?: LoanUpsertWithoutCommissionPaymentInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: LoanWhereUniqueInput;
    update?: LoanUpdateWithoutCommissionPaymentInput;
}
