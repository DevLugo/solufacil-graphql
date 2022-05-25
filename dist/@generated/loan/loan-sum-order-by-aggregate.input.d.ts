import { SortOrder } from '../prisma/sort-order.enum';
export declare class LoanSumOrderByAggregateInput {
    weeklyPaymentAmount?: keyof typeof SortOrder;
    amountToPay?: keyof typeof SortOrder;
}
