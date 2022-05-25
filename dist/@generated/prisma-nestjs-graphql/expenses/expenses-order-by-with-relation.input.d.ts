import { SortOrder } from '../prisma/sort-order.enum';
import { EmployeeOrderByWithRelationInput } from '../employee/employee-order-by-with-relation.input';
export declare class ExpensesOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    amountToPay?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    payedAt?: keyof typeof SortOrder;
    employee?: EmployeeOrderByWithRelationInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
}
