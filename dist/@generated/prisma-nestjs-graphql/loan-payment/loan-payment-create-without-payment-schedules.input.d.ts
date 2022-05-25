import { Decimal } from '@prisma/client/runtime';
import { LoanCreateNestedOneWithoutPaymentsInput } from '../loan/loan-create-nested-one-without-payments.input';
import { EmployeeCreateNestedOneWithoutLoanPaymentInput } from '../employee/employee-create-nested-one-without-loan-payment.input';
export declare class LoanPaymentCreateWithoutPaymentSchedulesInput {
    id?: string;
    amount: Decimal;
    date: Date | string;
    comments?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loan: LoanCreateNestedOneWithoutPaymentsInput;
    employee: EmployeeCreateNestedOneWithoutLoanPaymentInput;
}
