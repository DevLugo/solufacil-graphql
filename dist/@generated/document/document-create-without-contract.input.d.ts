import { DocumentType } from '../prisma/document-type.enum';
import { BorrowerCreateNestedOneWithoutDocumentsInput } from '../borrower/borrower-create-nested-one-without-documents.input';
import { EmployeeCreateNestedOneWithoutDocumentsInput } from '../employee/employee-create-nested-one-without-documents.input';
import { AvalCreateNestedOneWithoutDocumentsInput } from '../aval/aval-create-nested-one-without-documents.input';
export declare class DocumentCreateWithoutContractInput {
    id?: string;
    type: keyof typeof DocumentType;
    borrower?: BorrowerCreateNestedOneWithoutDocumentsInput;
    employee?: EmployeeCreateNestedOneWithoutDocumentsInput;
    aval?: AvalCreateNestedOneWithoutDocumentsInput;
}
