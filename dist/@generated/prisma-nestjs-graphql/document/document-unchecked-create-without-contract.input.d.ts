import { DocumentType } from '../prisma/document-type.enum';
export declare class DocumentUncheckedCreateWithoutContractInput {
    id?: string;
    type: keyof typeof DocumentType;
    borrowerId?: string;
    avalId?: string;
    employeeId?: string;
}
