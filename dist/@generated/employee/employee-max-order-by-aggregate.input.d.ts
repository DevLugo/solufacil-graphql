import { SortOrder } from '../prisma/sort-order.enum';
export declare class EmployeeMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
