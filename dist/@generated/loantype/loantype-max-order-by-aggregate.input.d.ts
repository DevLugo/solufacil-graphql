import { SortOrder } from '../prisma/sort-order.enum';
export declare class LoantypeMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    weekDuration?: keyof typeof SortOrder;
    rate?: keyof typeof SortOrder;
    overdueRate?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
