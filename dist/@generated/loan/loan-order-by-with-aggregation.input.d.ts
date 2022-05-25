import { SortOrder } from '../prisma/sort-order.enum';
import { LoanCountOrderByAggregateInput } from './loan-count-order-by-aggregate.input';
import { LoanAvgOrderByAggregateInput } from './loan-avg-order-by-aggregate.input';
import { LoanMaxOrderByAggregateInput } from './loan-max-order-by-aggregate.input';
import { LoanMinOrderByAggregateInput } from './loan-min-order-by-aggregate.input';
import { LoanSumOrderByAggregateInput } from './loan-sum-order-by-aggregate.input';
export declare class LoanOrderByWithAggregationInput {
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
    _count?: LoanCountOrderByAggregateInput;
    _avg?: LoanAvgOrderByAggregateInput;
    _max?: LoanMaxOrderByAggregateInput;
    _min?: LoanMinOrderByAggregateInput;
    _sum?: LoanSumOrderByAggregateInput;
}
