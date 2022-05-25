import { SortOrder } from '../prisma/sort-order.enum';
export declare class ComissionPaymentConfigurationMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    employeeType?: keyof typeof SortOrder;
    loantypeId?: keyof typeof SortOrder;
    commissionGoalType?: keyof typeof SortOrder;
    commissionType?: keyof typeof SortOrder;
}
