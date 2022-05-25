import { SortOrder } from '../prisma/sort-order.enum';
import { EmployeeOrderByRelationAggregateInput } from '../employee/employee-order-by-relation-aggregate.input';
export declare class UserOrderByWithRelationInput {
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
    Employee?: EmployeeOrderByRelationAggregateInput;
}
