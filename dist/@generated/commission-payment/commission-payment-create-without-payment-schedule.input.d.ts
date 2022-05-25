import { Decimal } from '@prisma/client/runtime';
import { LoanCreateNestedOneWithoutCommissionPaymentInput } from '../loan/loan-create-nested-one-without-commission-payment.input';
import { EmployeeCreateNestedOneWithoutCommissionPaymentInput } from '../employee/employee-create-nested-one-without-commission-payment.input';
import { CommissionPaymentStatus } from '../prisma/commission-payment-status.enum';
export declare class CommissionPaymentCreateWithoutPaymentScheduleInput {
    id?: string;
    amount: Decimal;
    loan?: LoanCreateNestedOneWithoutCommissionPaymentInput;
    employee: EmployeeCreateNestedOneWithoutCommissionPaymentInput;
    status: keyof typeof CommissionPaymentStatus;
}
