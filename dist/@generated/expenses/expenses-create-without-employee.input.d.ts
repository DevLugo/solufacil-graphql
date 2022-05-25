import { Decimal } from '@prisma/client/runtime';
import { PaymentState } from '../prisma/payment-state.enum';
export declare class ExpensesCreateWithoutEmployeeInput {
    id?: string;
    amountToPay: Decimal;
    status: keyof typeof PaymentState;
    dueDate: Date | string;
    payedAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId?: string;
}
