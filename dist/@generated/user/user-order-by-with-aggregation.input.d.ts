import { SortOrder } from '../prisma/sort-order.enum';
import { UserCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { UserMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { UserMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';
export declare class UserOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    lastLogin?: keyof typeof SortOrder;
    profilePicture?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
}
