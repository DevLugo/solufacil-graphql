import { SortOrder } from '../prisma/sort-order.enum';
export declare class PaymentScheduleAvgOrderByAggregateInput {
    numeration?: keyof typeof SortOrder;
    amountToPay?: keyof typeof SortOrder;
    paidAmount?: keyof typeof SortOrder;
    returnToCapital?: keyof typeof SortOrder;
    profit?: keyof typeof SortOrder;
}
