import { Borrower } from '../borrower/borrower.model';
import { Employee } from '../employee/employee.model';
import { Aval } from '../aval/aval.model';
export declare class Phone {
    id: string;
    number: string;
    Borrower?: Borrower | null;
    borrowerId: string | null;
    Employee?: Employee | null;
    createdAt: Date;
    updatedAt: Date;
    aval?: Aval | null;
    avalId: string | null;
    employeeId: string | null;
}
