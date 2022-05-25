import { SortOrder } from '../prisma/sort-order.enum';
import { EmployeeCountOrderByAggregateInput } from './employee-count-order-by-aggregate.input';
import { EmployeeMaxOrderByAggregateInput } from './employee-max-order-by-aggregate.input';
import { EmployeeMinOrderByAggregateInput } from './employee-min-order-by-aggregate.input';
export declare class EmployeeOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    _count?: EmployeeCountOrderByAggregateInput;
    _max?: EmployeeMaxOrderByAggregateInput;
    _min?: EmployeeMinOrderByAggregateInput;
}
