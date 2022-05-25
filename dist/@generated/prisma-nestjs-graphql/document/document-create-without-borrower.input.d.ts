import { DocumentType } from '../prisma/document-type.enum';
import { EmployeeCreateNestedOneWithoutDocumentsInput } from '../employee/employee-create-nested-one-without-documents.input';
import { AvalCreateNestedOneWithoutDocumentsInput } from '../aval/aval-create-nested-one-without-documents.input';
import { ContractCreateNestedOneWithoutDocumentsInput } from '../contract/contract-create-nested-one-without-documents.input';
export declare class DocumentCreateWithoutBorrowerInput {
    id?: string;
    type: keyof typeof DocumentType;
    employee?: EmployeeCreateNestedOneWithoutDocumentsInput;
    aval?: AvalCreateNestedOneWithoutDocumentsInput;
    contract?: ContractCreateNestedOneWithoutDocumentsInput;
}
