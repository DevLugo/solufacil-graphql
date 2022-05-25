import { DocumentType } from '../prisma/document-type.enum';
export declare class DocumentCreateManyBorrowerInput {
    id?: string;
    type: keyof typeof DocumentType;
    avalId?: string;
    contractId?: string;
    employeeId?: string;
}
