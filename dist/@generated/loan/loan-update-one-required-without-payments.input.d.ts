import { LoanCreateWithoutPaymentsInput } from './loan-create-without-payments.input';
import { LoanCreateOrConnectWithoutPaymentsInput } from './loan-create-or-connect-without-payments.input';
import { LoanUpsertWithoutPaymentsInput } from './loan-upsert-without-payments.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithoutPaymentsInput } from './loan-update-without-payments.input';
export declare class LoanUpdateOneRequiredWithoutPaymentsInput {
    create?: LoanCreateWithoutPaymentsInput;
    connectOrCreate?: LoanCreateOrConnectWithoutPaymentsInput;
    upsert?: LoanUpsertWithoutPaymentsInput;
    connect?: LoanWhereUniqueInput;
    update?: LoanUpdateWithoutPaymentsInput;
}
