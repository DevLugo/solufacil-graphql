import { SortOrder } from '../prisma/sort-order.enum';
import { ExpensesCountOrderByAggregateInput } from './expenses-count-order-by-aggregate.input';
import { ExpensesAvgOrderByAggregateInput } from './expenses-avg-order-by-aggregate.input';
import { ExpensesMaxOrderByAggregateInput } from './expenses-max-order-by-aggregate.input';
import { ExpensesMinOrderByAggregateInput } from './expenses-min-order-by-aggregate.input';
import { ExpensesSumOrderByAggregateInput } from './expenses-sum-order-by-aggregate.input';
export declare class ExpensesOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    amountToPay?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    payedAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
    _count?: ExpensesCountOrderByAggregateInput;
    _avg?: ExpensesAvgOrderByAggregateInput;
    _max?: ExpensesMaxOrderByAggregateInput;
    _min?: ExpensesMinOrderByAggregateInput;
    _sum?: ExpensesSumOrderByAggregateInput;
}
