import { SortOrder } from '../prisma/sort-order.enum';
import { SystemSectionCountOrderByAggregateInput } from './system-section-count-order-by-aggregate.input';
import { SystemSectionMaxOrderByAggregateInput } from './system-section-max-order-by-aggregate.input';
import { SystemSectionMinOrderByAggregateInput } from './system-section-min-order-by-aggregate.input';
export declare class SystemSectionOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: SystemSectionCountOrderByAggregateInput;
    _max?: SystemSectionMaxOrderByAggregateInput;
    _min?: SystemSectionMinOrderByAggregateInput;
}
