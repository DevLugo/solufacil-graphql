import { SortOrder } from '../prisma/sort-order.enum';
export declare class PaymentScheduleCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    numeration?: keyof typeof SortOrder;
    amountToPay?: keyof typeof SortOrder;
    paidAmount?: keyof typeof SortOrder;
    returnToCapital?: keyof typeof SortOrder;
    profit?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    delayed?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    details?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    loanId?: keyof typeof SortOrder;
}
