import { Decimal } from '@prisma/client/runtime';
import { PaymentScheduleCreateNestedManyWithoutLoanPaymentsInput } from '../payment-schedule/payment-schedule-create-nested-many-without-loan-payments.input';
import { LoanCreateNestedOneWithoutPaymentsInput } from '../loan/loan-create-nested-one-without-payments.input';
export declare class LoanPaymentCreateWithoutEmployeeInput {
    id?: string;
    amount: Decimal;
    date: Date | string;
    comments?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLoanPaymentsInput;
    loan: LoanCreateNestedOneWithoutPaymentsInput;
}
