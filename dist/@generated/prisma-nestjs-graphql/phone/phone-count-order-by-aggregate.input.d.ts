import { SortOrder } from '../prisma/sort-order.enum';
export declare class PhoneCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    number?: keyof typeof SortOrder;
    borrowerId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    avalId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
}
