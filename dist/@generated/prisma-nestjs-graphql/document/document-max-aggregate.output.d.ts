import { DocumentType } from '../prisma/document-type.enum';
export declare class DocumentMaxAggregate {
    id?: string;
    type?: keyof typeof DocumentType;
    borrowerId?: string;
    avalId?: string;
    contractId?: string;
    employeeId?: string;
}
