import { Decimal } from '@prisma/client/runtime';
import { PaymentState } from '../prisma/payment-state.enum';
import { Employee } from '../employee/employee.model';
export declare class Expenses {
    id: string;
    amountToPay: Decimal;
    status: keyof typeof PaymentState;
    dueDate: Date;
    payedAt: Date;
    employee?: Employee;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    employeeId: string;
}
