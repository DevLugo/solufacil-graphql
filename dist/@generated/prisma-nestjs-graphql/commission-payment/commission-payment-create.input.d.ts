import { Decimal } from '@prisma/client/runtime';
import { PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput } from '../payment-schedule/payment-schedule-create-nested-one-without-commission-payment.input';
import { LoanCreateNestedOneWithoutCommissionPaymentInput } from '../loan/loan-create-nested-one-without-commission-payment.input';
import { EmployeeCreateNestedOneWithoutCommissionPaymentInput } from '../employee/employee-create-nested-one-without-commission-payment.input';
import { CommissionPaymentStatus } from '../prisma/commission-payment-status.enum';
export declare class CommissionPaymentCreateInput {
    id?: string;
    amount: Decimal;
    paymentSchedule: PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput;
    loan?: LoanCreateNestedOneWithoutCommissionPaymentInput;
    employee: EmployeeCreateNestedOneWithoutCommissionPaymentInput;
    status: keyof typeof CommissionPaymentStatus;
}
