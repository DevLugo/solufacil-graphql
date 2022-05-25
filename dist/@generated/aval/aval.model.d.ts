import { Phone } from '../phone/phone.model';
import { Document } from '../document/document.model';
import { AvalCount } from './aval-count.output';
export declare class Aval {
    id: string;
    phones?: Array<Phone>;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    documents?: Array<Document>;
    createdAt: Date;
    updatedAt: Date;
    _count?: AvalCount;
}
