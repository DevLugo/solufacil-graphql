import { Decimal } from '@prisma/client/runtime';
import { PaymentScheduleCreateNestedManyWithoutLoanPaymentsInput } from '../payment-schedule/payment-schedule-create-nested-many-without-loan-payments.input';
import { LoanCreateNestedOneWithoutPaymentsInput } from '../loan/loan-create-nested-one-without-payments.input';
import { EmployeeCreateNestedOneWithoutLoanPaymentInput } from '../employee/employee-create-nested-one-without-loan-payment.input';
export declare class LoanPaymentCreateInput {
    id?: string;
    amount: Decimal;
    date: Date | string;
    comments?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLoanPaymentsInput;
    loan: LoanCreateNestedOneWithoutPaymentsInput;
    employee: EmployeeCreateNestedOneWithoutLoanPaymentInput;
}
