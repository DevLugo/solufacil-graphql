import { SortOrder } from '../prisma/sort-order.enum';
import { PaymentScheduleCountOrderByAggregateInput } from './payment-schedule-count-order-by-aggregate.input';
import { PaymentScheduleAvgOrderByAggregateInput } from './payment-schedule-avg-order-by-aggregate.input';
import { PaymentScheduleMaxOrderByAggregateInput } from './payment-schedule-max-order-by-aggregate.input';
import { PaymentScheduleMinOrderByAggregateInput } from './payment-schedule-min-order-by-aggregate.input';
import { PaymentScheduleSumOrderByAggregateInput } from './payment-schedule-sum-order-by-aggregate.input';
export declare class PaymentScheduleOrderByWithAggregationInput {
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
    _count?: PaymentScheduleCountOrderByAggregateInput;
    _avg?: PaymentScheduleAvgOrderByAggregateInput;
    _max?: PaymentScheduleMaxOrderByAggregateInput;
    _min?: PaymentScheduleMinOrderByAggregateInput;
    _sum?: PaymentScheduleSumOrderByAggregateInput;
}
