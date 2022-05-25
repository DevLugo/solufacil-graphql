import { LoanCreateNestedManyWithoutLoanTypeInput } from '../loan/loan-create-nested-many-without-loan-type.input';
import { ComissionPaymentConfigurationCreateNestedManyWithoutLoanTypeInput } from '../comission-payment-configuration/comission-payment-configuration-create-nested-many-without-loan-type.input';
export declare class LoantypeCreateInput {
    id?: string;
    name: string;
    weekDuration: number;
    rate: number;
    overdueRate: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Loan?: LoanCreateNestedManyWithoutLoanTypeInput;
    ComissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLoanTypeInput;
}
