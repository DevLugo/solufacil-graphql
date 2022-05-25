import { Decimal } from '@prisma/client/runtime';
import { CommissionPaymentStatus } from '../prisma/commission-payment-status.enum';
export declare class CommissionPaymentCreateManyLoanInput {
    id?: string;
    amount: Decimal;
    paymentScheduleId: string;
    employeeId: string;
    status: keyof typeof CommissionPaymentStatus;
}
