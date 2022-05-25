import { SortOrder } from '../prisma/sort-order.enum';
import { BorrowerOrderByWithRelationInput } from '../borrower/borrower-order-by-with-relation.input';
import { EmployeeOrderByWithRelationInput } from '../employee/employee-order-by-with-relation.input';
import { AvalOrderByWithRelationInput } from '../aval/aval-order-by-with-relation.input';
import { ContractOrderByWithRelationInput } from '../contract/contract-order-by-with-relation.input';
export declare class DocumentOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    borrower?: BorrowerOrderByWithRelationInput;
    borrowerId?: keyof typeof SortOrder;
    employee?: EmployeeOrderByWithRelationInput;
    aval?: AvalOrderByWithRelationInput;
    avalId?: keyof typeof SortOrder;
    contract?: ContractOrderByWithRelationInput;
    contractId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
}
