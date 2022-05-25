import { SortOrder } from '../prisma/sort-order.enum';
export declare class CustomerMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    logo?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
