import { SortOrder } from '../prisma/sort-order.enum';
export declare class LoanAvgOrderByAggregateInput {
    weeklyPaymentAmount?: keyof typeof SortOrder;
    amountToPay?: keyof typeof SortOrder;
}
