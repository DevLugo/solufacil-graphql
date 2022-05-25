import { LoanUncheckedCreateNestedManyWithoutLoanTypeInput } from '../loan/loan-unchecked-create-nested-many-without-loan-type.input';
import { ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput } from '../comission-payment-configuration/comission-payment-configuration-unchecked-create-nested-many-without-loan-type.input';
export declare class LoantypeUncheckedCreateInput {
    id?: string;
    name: string;
    weekDuration: number;
    rate: number;
    overdueRate: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Loan?: LoanUncheckedCreateNestedManyWithoutLoanTypeInput;
    ComissionPaymentConfiguration?: ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput;
}
