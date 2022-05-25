import { SortOrder } from '../prisma/sort-order.enum';
export declare class ContractTypeMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    monthDuration?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    maxRate?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
