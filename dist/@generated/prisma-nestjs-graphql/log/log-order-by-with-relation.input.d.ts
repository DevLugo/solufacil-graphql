import { SortOrder } from '../prisma/sort-order.enum';
import { SystemSectionOrderByWithRelationInput } from '../system-section/system-section-order-by-with-relation.input';
export declare class LogOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    section?: SystemSectionOrderByWithRelationInput;
    requestBody?: keyof typeof SortOrder;
    requestType?: keyof typeof SortOrder;
    deviceType?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    systemSectionId?: keyof typeof SortOrder;
}
