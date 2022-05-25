import { SortOrder } from '../prisma/sort-order.enum';
import { BorrowerCountOrderByAggregateInput } from './borrower-count-order-by-aggregate.input';
import { BorrowerMaxOrderByAggregateInput } from './borrower-max-order-by-aggregate.input';
import { BorrowerMinOrderByAggregateInput } from './borrower-min-order-by-aggregate.input';
export declare class BorrowerOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: BorrowerCountOrderByAggregateInput;
    _max?: BorrowerMaxOrderByAggregateInput;
    _min?: BorrowerMinOrderByAggregateInput;
}
