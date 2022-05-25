import { LoanCreateNestedManyWithoutLoanTypeInput } from '../loan/loan-create-nested-many-without-loan-type.input';
export declare class LoantypeCreateWithoutComissionPaymentConfigurationInput {
    id?: string;
    name: string;
    weekDuration: number;
    rate: number;
    overdueRate: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Loan?: LoanCreateNestedManyWithoutLoanTypeInput;
}
