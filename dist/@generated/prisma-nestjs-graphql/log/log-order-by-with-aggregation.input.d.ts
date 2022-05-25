import { SortOrder } from '../prisma/sort-order.enum';
import { LogCountOrderByAggregateInput } from './log-count-order-by-aggregate.input';
import { LogMaxOrderByAggregateInput } from './log-max-order-by-aggregate.input';
import { LogMinOrderByAggregateInput } from './log-min-order-by-aggregate.input';
export declare class LogOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    requestBody?: keyof typeof SortOrder;
    requestType?: keyof typeof SortOrder;
    deviceType?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    systemSectionId?: keyof typeof SortOrder;
    _count?: LogCountOrderByAggregateInput;
    _max?: LogMaxOrderByAggregateInput;
    _min?: LogMinOrderByAggregateInput;
}
