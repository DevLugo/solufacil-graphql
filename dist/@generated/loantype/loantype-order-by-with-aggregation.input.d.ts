import { SortOrder } from '../prisma/sort-order.enum';
import { LoantypeCountOrderByAggregateInput } from './loantype-count-order-by-aggregate.input';
import { LoantypeAvgOrderByAggregateInput } from './loantype-avg-order-by-aggregate.input';
import { LoantypeMaxOrderByAggregateInput } from './loantype-max-order-by-aggregate.input';
import { LoantypeMinOrderByAggregateInput } from './loantype-min-order-by-aggregate.input';
import { LoantypeSumOrderByAggregateInput } from './loantype-sum-order-by-aggregate.input';
export declare class LoantypeOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    weekDuration?: keyof typeof SortOrder;
    rate?: keyof typeof SortOrder;
    overdueRate?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: LoantypeCountOrderByAggregateInput;
    _avg?: LoantypeAvgOrderByAggregateInput;
    _max?: LoantypeMaxOrderByAggregateInput;
    _min?: LoantypeMinOrderByAggregateInput;
    _sum?: LoantypeSumOrderByAggregateInput;
}
