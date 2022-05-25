import { Decimal } from '@prisma/client/runtime';
import { CommissionPaymentStatus } from '../prisma/commission-payment-status.enum';
export declare class CommissionPaymentCreateManyInput {
    id?: string;
    amount: Decimal;
    loanId?: string;
    paymentScheduleId: string;
    employeeId: string;
    status: keyof typeof CommissionPaymentStatus;
}
