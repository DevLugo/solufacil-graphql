import { Phone } from '../phone/phone.model';
import { Document } from '../document/document.model';
import { Contract } from '../contract/contract.model';
import { Local } from '../local/local.model';
import { BorrowerCount } from './borrower-count.output';
export declare class Borrower {
    id: string;
    name: string;
    address: string;
    email: string | null;
    phones?: Array<Phone>;
    documents?: Array<Document>;
    createdAt: Date;
    updatedAt: Date;
    Contract?: Array<Contract>;
    Local?: Array<Local>;
    _count?: BorrowerCount;
}
