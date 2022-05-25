import { Borrower } from '../borrower/borrower.model';
export declare class Local {
    id: string;
    name: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    borrower?: Borrower;
    borrowerId: string;
}
