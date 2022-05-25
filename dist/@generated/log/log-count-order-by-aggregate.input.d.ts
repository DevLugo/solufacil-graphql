import { SortOrder } from '../prisma/sort-order.enum';
export declare class LogCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    requestBody?: keyof typeof SortOrder;
    requestType?: keyof typeof SortOrder;
    deviceType?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    systemSectionId?: keyof typeof SortOrder;
}
