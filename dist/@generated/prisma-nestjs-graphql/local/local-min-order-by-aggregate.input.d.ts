import { SortOrder } from '../prisma/sort-order.enum';
export declare class LocalMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    borrowerId?: keyof typeof SortOrder;
}
