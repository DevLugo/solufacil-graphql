import { SortOrder } from '../prisma/sort-order.enum';
export declare class AvalMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
