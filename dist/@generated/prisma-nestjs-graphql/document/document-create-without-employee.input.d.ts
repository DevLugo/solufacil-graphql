import { DocumentType } from '../prisma/document-type.enum';
import { BorrowerCreateNestedOneWithoutDocumentsInput } from '../borrower/borrower-create-nested-one-without-documents.input';
import { AvalCreateNestedOneWithoutDocumentsInput } from '../aval/aval-create-nested-one-without-documents.input';
import { ContractCreateNestedOneWithoutDocumentsInput } from '../contract/contract-create-nested-one-without-documents.input';
export declare class DocumentCreateWithoutEmployeeInput {
    id?: string;
    type: keyof typeof DocumentType;
    borrower?: BorrowerCreateNestedOneWithoutDocumentsInput;
    aval?: AvalCreateNestedOneWithoutDocumentsInput;
    contract?: ContractCreateNestedOneWithoutDocumentsInput;
}
