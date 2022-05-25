import { LoanUncheckedCreateNestedManyWithoutLoanTypeInput } from '../loan/loan-unchecked-create-nested-many-without-loan-type.input';
export declare class LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput {
    id?: string;
    name: string;
    weekDuration: number;
    rate: number;
    overdueRate: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Loan?: LoanUncheckedCreateNestedManyWithoutLoanTypeInput;
}
