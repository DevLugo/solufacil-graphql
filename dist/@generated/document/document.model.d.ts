import { DocumentType } from '../prisma/document-type.enum';
import { Borrower } from '../borrower/borrower.model';
import { Employee } from '../employee/employee.model';
import { Aval } from '../aval/aval.model';
import { Contract } from '../contract/contract.model';
export declare class Document {
    id: string;
    type: keyof typeof DocumentType;
    borrower?: Borrower | null;
    borrowerId: string | null;
    employee?: Employee | null;
    aval?: Aval | null;
    avalId: string | null;
    contract?: Contract | null;
    contractId: string | null;
    employeeId: string | null;
}
