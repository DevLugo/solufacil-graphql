import { Decimal } from '@prisma/client/runtime';
import { CommissionPaymentStatus } from '../prisma/commission-payment-status.enum';
export declare class CommissionPaymentCreateManyPaymentScheduleInput {
    id?: string;
    amount: Decimal;
    loanId?: string;
    employeeId: string;
    status: keyof typeof CommissionPaymentStatus;
}
