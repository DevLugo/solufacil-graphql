import { Decimal } from '@prisma/client/runtime';
import { CommissionPaymentStatus } from '../prisma/commission-payment-status.enum';
export declare class CommissionPaymentUncheckedCreateWithoutEmployeeInput {
    id?: string;
    amount: Decimal;
    loanId?: string;
    paymentScheduleId: string;
    status: keyof typeof CommissionPaymentStatus;
}
