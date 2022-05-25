import { DocumentType } from '../prisma/document-type.enum';
export declare class DocumentUncheckedCreateWithoutEmployeeInput {
    id?: string;
    type: keyof typeof DocumentType;
    borrowerId?: string;
    avalId?: string;
    contractId?: string;
}
