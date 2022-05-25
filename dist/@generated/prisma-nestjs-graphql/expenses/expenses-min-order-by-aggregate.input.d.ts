import { SortOrder } from '../prisma/sort-order.enum';
export declare class ExpensesMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amountToPay?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    payedAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
}
