import { Borrower } from '../borrower/borrower.model';
import { Document } from '../document/document.model';
import { Loan } from '../loan/loan.model';
import { ContractType } from '../contract-type/contract-type.model';
import { Employee } from '../employee/employee.model';
import { ContractCount } from './contract-count.output';
export declare class Contract {
    id: string;
    borrower?: Borrower;
    borrowerId: string;
    documents?: Array<Document>;
    loans?: Array<Loan>;
    createdAt: Date;
    dueDate: Date;
    signDate: Date;
    updatedAt: Date;
    contractType?: ContractType;
    contractTypeId: string;
    loanLeadId: string;
    employeeId: string;
    loanLead?: Employee | null;
    employee?: Employee;
    _count?: ContractCount;
}
