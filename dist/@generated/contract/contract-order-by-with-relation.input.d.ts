import { SortOrder } from '../prisma/sort-order.enum';
import { BorrowerOrderByWithRelationInput } from '../borrower/borrower-order-by-with-relation.input';
import { DocumentOrderByRelationAggregateInput } from '../document/document-order-by-relation-aggregate.input';
import { LoanOrderByRelationAggregateInput } from '../loan/loan-order-by-relation-aggregate.input';
import { ContractTypeOrderByWithRelationInput } from '../contract-type/contract-type-order-by-with-relation.input';
import { EmployeeOrderByWithRelationInput } from '../employee/employee-order-by-with-relation.input';
export declare class ContractOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    borrower?: BorrowerOrderByWithRelationInput;
    borrowerId?: keyof typeof SortOrder;
    documents?: DocumentOrderByRelationAggregateInput;
    loans?: LoanOrderByRelationAggregateInput;
    createdAt?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    signDate?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    contractType?: ContractTypeOrderByWithRelationInput;
    contractTypeId?: keyof typeof SortOrder;
    loanLeadId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
    loanLead?: EmployeeOrderByWithRelationInput;
    employee?: EmployeeOrderByWithRelationInput;
}
