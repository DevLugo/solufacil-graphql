import { DocumentType } from '../prisma/document-type.enum';
export declare class DocumentCreateManyAvalInput {
    id?: string;
    type: keyof typeof DocumentType;
    borrowerId?: string;
    contractId?: string;
    employeeId?: string;
}
