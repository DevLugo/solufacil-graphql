import { SortOrder } from '../prisma/sort-order.enum';
import { CommissionPaymentCountOrderByAggregateInput } from './commission-payment-count-order-by-aggregate.input';
import { CommissionPaymentAvgOrderByAggregateInput } from './commission-payment-avg-order-by-aggregate.input';
import { CommissionPaymentMaxOrderByAggregateInput } from './commission-payment-max-order-by-aggregate.input';
import { CommissionPaymentMinOrderByAggregateInput } from './commission-payment-min-order-by-aggregate.input';
import { CommissionPaymentSumOrderByAggregateInput } from './commission-payment-sum-order-by-aggregate.input';
export declare class CommissionPaymentOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    loanId?: keyof typeof SortOrder;
    paymentScheduleId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    _count?: CommissionPaymentCountOrderByAggregateInput;
    _avg?: CommissionPaymentAvgOrderByAggregateInput;
    _max?: CommissionPaymentMaxOrderByAggregateInput;
    _min?: CommissionPaymentMinOrderByAggregateInput;
    _sum?: CommissionPaymentSumOrderByAggregateInput;
}
