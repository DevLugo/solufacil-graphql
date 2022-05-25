import { Decimal } from '@prisma/client/runtime';
import { PaymentScheduleUncheckedCreateNestedManyWithoutLoanPaymentsInput } from '../payment-schedule/payment-schedule-unchecked-create-nested-many-without-loan-payments.input';
export declare class LoanPaymentUncheckedCreateWithoutEmployeeInput {
    id?: string;
    amount: Decimal;
    date: Date | string;
    comments?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutLoanPaymentsInput;
    loanId: string;
}
