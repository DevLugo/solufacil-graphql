import { Decimal } from '@prisma/client/runtime';
import { PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput } from '../payment-schedule/payment-schedule-create-nested-one-without-commission-payment.input';
import { LoanCreateNestedOneWithoutCommissionPaymentInput } from '../loan/loan-create-nested-one-without-commission-payment.input';
import { CommissionPaymentStatus } from '../prisma/commission-payment-status.enum';
export declare class CommissionPaymentCreateWithoutEmployeeInput {
    id?: string;
    amount: Decimal;
    paymentSchedule: PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput;
    loan?: LoanCreateNestedOneWithoutCommissionPaymentInput;
    status: keyof typeof CommissionPaymentStatus;
}
