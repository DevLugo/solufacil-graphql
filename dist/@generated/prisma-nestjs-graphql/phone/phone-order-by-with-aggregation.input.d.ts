import { SortOrder } from '../prisma/sort-order.enum';
import { PhoneCountOrderByAggregateInput } from './phone-count-order-by-aggregate.input';
import { PhoneMaxOrderByAggregateInput } from './phone-max-order-by-aggregate.input';
import { PhoneMinOrderByAggregateInput } from './phone-min-order-by-aggregate.input';
export declare class PhoneOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    number?: keyof typeof SortOrder;
    borrowerId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    avalId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
    _count?: PhoneCountOrderByAggregateInput;
    _max?: PhoneMaxOrderByAggregateInput;
    _min?: PhoneMinOrderByAggregateInput;
}
