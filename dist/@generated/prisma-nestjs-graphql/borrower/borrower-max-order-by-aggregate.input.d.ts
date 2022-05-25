import { SortOrder } from '../prisma/sort-order.enum';
export declare class BorrowerMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
