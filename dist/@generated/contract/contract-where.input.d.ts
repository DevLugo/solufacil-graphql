import { StringFilter } from '../prisma/string-filter.input';
import { BorrowerRelationFilter } from '../borrower/borrower-relation-filter.input';
import { DocumentListRelationFilter } from '../document/document-list-relation-filter.input';
import { LoanListRelationFilter } from '../loan/loan-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ContractTypeRelationFilter } from '../contract-type/contract-type-relation-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';
export declare class ContractWhereInput {
    AND?: Array<ContractWhereInput>;
    OR?: Array<ContractWhereInput>;
    NOT?: Array<ContractWhereInput>;
    id?: StringFilter;
    borrower?: BorrowerRelationFilter;
    borrowerId?: StringFilter;
    documents?: DocumentListRelationFilter;
    loans?: LoanListRelationFilter;
    createdAt?: DateTimeFilter;
    dueDate?: DateTimeFilter;
    signDate?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    contractType?: ContractTypeRelationFilter;
    contractTypeId?: StringFilter;
    loanLeadId?: StringFilter;
    employeeId?: StringFilter;
    loanLead?: EmployeeRelationFilter;
    employee?: EmployeeRelationFilter;
}
