import { SortOrder } from '../prisma/sort-order.enum';
export declare class ContractTypeSumOrderByAggregateInput {
    monthDuration?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    maxRate?: keyof typeof SortOrder;
}
