import { SortOrder } from '../prisma/sort-order.enum';
export declare class UserMaxOrderByAggregateInput {
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
}
