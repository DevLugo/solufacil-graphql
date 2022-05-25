import { SortOrder } from '../prisma/sort-order.enum';
import { AvalCountOrderByAggregateInput } from './aval-count-order-by-aggregate.input';
import { AvalMaxOrderByAggregateInput } from './aval-max-order-by-aggregate.input';
import { AvalMinOrderByAggregateInput } from './aval-min-order-by-aggregate.input';
export declare class AvalOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: AvalCountOrderByAggregateInput;
    _max?: AvalMaxOrderByAggregateInput;
    _min?: AvalMinOrderByAggregateInput;
}
