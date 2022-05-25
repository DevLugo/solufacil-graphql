import { SortOrder } from '../prisma/sort-order.enum';
import { LoanPaymentCountOrderByAggregateInput } from './loan-payment-count-order-by-aggregate.input';
import { LoanPaymentAvgOrderByAggregateInput } from './loan-payment-avg-order-by-aggregate.input';
import { LoanPaymentMaxOrderByAggregateInput } from './loan-payment-max-order-by-aggregate.input';
import { LoanPaymentMinOrderByAggregateInput } from './loan-payment-min-order-by-aggregate.input';
import { LoanPaymentSumOrderByAggregateInput } from './loan-payment-sum-order-by-aggregate.input';
export declare class LoanPaymentOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    date?: keyof typeof SortOrder;
    comments?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    loanId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
    _count?: LoanPaymentCountOrderByAggregateInput;
    _avg?: LoanPaymentAvgOrderByAggregateInput;
    _max?: LoanPaymentMaxOrderByAggregateInput;
    _min?: LoanPaymentMinOrderByAggregateInput;
    _sum?: LoanPaymentSumOrderByAggregateInput;
}
