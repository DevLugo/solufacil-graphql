import { SortOrder } from '../prisma/sort-order.enum';
import { BorrowerOrderByWithRelationInput } from '../borrower/borrower-order-by-with-relation.input';
import { EmployeeOrderByWithRelationInput } from '../employee/employee-order-by-with-relation.input';
import { AvalOrderByWithRelationInput } from '../aval/aval-order-by-with-relation.input';
export declare class PhoneOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    number?: keyof typeof SortOrder;
    Borrower?: BorrowerOrderByWithRelationInput;
    borrowerId?: keyof typeof SortOrder;
    Employee?: EmployeeOrderByWithRelationInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    aval?: AvalOrderByWithRelationInput;
    avalId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
}
