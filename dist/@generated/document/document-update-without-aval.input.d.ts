import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDocumentTypeFieldUpdateOperationsInput } from '../prisma/enum-document-type-field-update-operations.input';
import { BorrowerUpdateOneWithoutDocumentsInput } from '../borrower/borrower-update-one-without-documents.input';
import { EmployeeUpdateOneWithoutDocumentsInput } from '../employee/employee-update-one-without-documents.input';
import { ContractUpdateOneWithoutDocumentsInput } from '../contract/contract-update-one-without-documents.input';
export declare class DocumentUpdateWithoutAvalInput {
    id?: StringFieldUpdateOperationsInput;
    type?: EnumDocumentTypeFieldUpdateOperationsInput;
    borrower?: BorrowerUpdateOneWithoutDocumentsInput;
    employee?: EmployeeUpdateOneWithoutDocumentsInput;
    contract?: ContractUpdateOneWithoutDocumentsInput;
}
