import { SortOrder } from '../prisma/sort-order.enum';
import { CustomerCountOrderByAggregateInput } from './customer-count-order-by-aggregate.input';
import { CustomerMaxOrderByAggregateInput } from './customer-max-order-by-aggregate.input';
import { CustomerMinOrderByAggregateInput } from './customer-min-order-by-aggregate.input';
export declare class CustomerOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    logo?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: CustomerCountOrderByAggregateInput;
    _max?: CustomerMaxOrderByAggregateInput;
    _min?: CustomerMinOrderByAggregateInput;
}
