import { LoanCreateWithoutPaymentsInput } from './loan-create-without-payments.input';
import { LoanCreateOrConnectWithoutPaymentsInput } from './loan-create-or-connect-without-payments.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
export declare class LoanCreateNestedOneWithoutPaymentsInput {
    create?: LoanCreateWithoutPaymentsInput;
    connectOrCreate?: LoanCreateOrConnectWithoutPaymentsInput;
    connect?: LoanWhereUniqueInput;
}
