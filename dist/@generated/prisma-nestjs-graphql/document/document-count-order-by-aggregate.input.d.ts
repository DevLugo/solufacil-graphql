import { SortOrder } from '../prisma/sort-order.enum';
export declare class DocumentCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    borrowerId?: keyof typeof SortOrder;
    avalId?: keyof typeof SortOrder;
    contractId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
}
