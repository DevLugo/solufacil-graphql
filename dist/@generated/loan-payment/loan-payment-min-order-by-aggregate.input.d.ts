import { SortOrder } from '../prisma/sort-order.enum';
export declare class LoanPaymentMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    date?: keyof typeof SortOrder;
    comments?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    loanId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
}
