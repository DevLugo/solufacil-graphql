import { SortOrder } from '../prisma/sort-order.enum';
import { DocumentCountOrderByAggregateInput } from './document-count-order-by-aggregate.input';
import { DocumentMaxOrderByAggregateInput } from './document-max-order-by-aggregate.input';
import { DocumentMinOrderByAggregateInput } from './document-min-order-by-aggregate.input';
export declare class DocumentOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    borrowerId?: keyof typeof SortOrder;
    avalId?: keyof typeof SortOrder;
    contractId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
    _count?: DocumentCountOrderByAggregateInput;
    _max?: DocumentMaxOrderByAggregateInput;
    _min?: DocumentMinOrderByAggregateInput;
}
