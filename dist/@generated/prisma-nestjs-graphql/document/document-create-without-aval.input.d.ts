import { DocumentType } from '../prisma/document-type.enum';
import { BorrowerCreateNestedOneWithoutDocumentsInput } from '../borrower/borrower-create-nested-one-without-documents.input';
import { EmployeeCreateNestedOneWithoutDocumentsInput } from '../employee/employee-create-nested-one-without-documents.input';
import { ContractCreateNestedOneWithoutDocumentsInput } from '../contract/contract-create-nested-one-without-documents.input';
export declare class DocumentCreateWithoutAvalInput {
    id?: string;
    type: keyof typeof DocumentType;
    borrower?: BorrowerCreateNestedOneWithoutDocumentsInput;
    employee?: EmployeeCreateNestedOneWithoutDocumentsInput;
    contract?: ContractCreateNestedOneWithoutDocumentsInput;
}
