import { DocumentType } from '../prisma/document-type.enum';
export declare class DocumentUncheckedCreateWithoutBorrowerInput {
    id?: string;
    type: keyof typeof DocumentType;
    avalId?: string;
    contractId?: string;
    employeeId?: string;
}
