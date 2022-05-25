import { SortOrder } from '../prisma/sort-order.enum';
import { LocalCountOrderByAggregateInput } from './local-count-order-by-aggregate.input';
import { LocalMaxOrderByAggregateInput } from './local-max-order-by-aggregate.input';
import { LocalMinOrderByAggregateInput } from './local-min-order-by-aggregate.input';
export declare class LocalOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    borrowerId?: keyof typeof SortOrder;
    _count?: LocalCountOrderByAggregateInput;
    _max?: LocalMaxOrderByAggregateInput;
    _min?: LocalMinOrderByAggregateInput;
}
