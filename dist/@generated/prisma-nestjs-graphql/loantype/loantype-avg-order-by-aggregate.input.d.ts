import { SortOrder } from '../prisma/sort-order.enum';
export declare class LoantypeAvgOrderByAggregateInput {
    weekDuration?: keyof typeof SortOrder;
    rate?: keyof typeof SortOrder;
    overdueRate?: keyof typeof SortOrder;
}
