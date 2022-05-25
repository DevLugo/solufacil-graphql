import { Decimal } from '@prisma/client/runtime';
import { PaymentState } from '../prisma/payment-state.enum';
export declare class PaymentScheduleCreateManyInput {
    id?: string;
    numeration: number;
    amountToPay: Decimal;
    paidAmount: Decimal;
    returnToCapital?: Decimal;
    profit?: Decimal;
    status: keyof typeof PaymentState;
    delayed?: boolean;
    dueDate: Date | string;
    details?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loanId: string;
}
