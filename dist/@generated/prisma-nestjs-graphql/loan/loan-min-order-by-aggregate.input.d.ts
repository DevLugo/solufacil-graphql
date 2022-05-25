import { SortOrder } from '../prisma/sort-order.enum';
export declare class LoanMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    weeklyPaymentAmount?: keyof typeof SortOrder;
    amountToPay?: keyof typeof SortOrder;
    signDate?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    contractId?: keyof typeof SortOrder;
    loantypeId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
}
