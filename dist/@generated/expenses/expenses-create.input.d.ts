import { Decimal } from '@prisma/client/runtime';
import { PaymentState } from '../prisma/payment-state.enum';
import { EmployeeCreateNestedOneWithoutExpensesInput } from '../employee/employee-create-nested-one-without-expenses.input';
export declare class ExpensesCreateInput {
    id?: string;
    amountToPay: Decimal;
    status: keyof typeof PaymentState;
    dueDate: Date | string;
    payedAt: Date | string;
    employee: EmployeeCreateNestedOneWithoutExpensesInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId?: string;
}
