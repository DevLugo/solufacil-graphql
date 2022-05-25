import { SortOrder } from '../prisma/sort-order.enum';
export declare class CommissionPaymentMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    loanId?: keyof typeof SortOrder;
    paymentScheduleId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
}
