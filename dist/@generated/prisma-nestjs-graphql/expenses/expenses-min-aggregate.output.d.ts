import { Decimal } from '@prisma/client/runtime';
import { PaymentState } from '../prisma/payment-state.enum';
export declare class ExpensesMinAggregate {
    id?: string;
    amountToPay?: Decimal;
    status?: keyof typeof PaymentState;
    dueDate?: Date | string;
    payedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId?: string;
    employeeId?: string;
}
