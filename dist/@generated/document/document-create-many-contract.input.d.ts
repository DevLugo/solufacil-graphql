import { DocumentType } from '../prisma/document-type.enum';
export declare class DocumentCreateManyContractInput {
    id?: string;
    type: keyof typeof DocumentType;
    borrowerId?: string;
    avalId?: string;
    employeeId?: string;
}
