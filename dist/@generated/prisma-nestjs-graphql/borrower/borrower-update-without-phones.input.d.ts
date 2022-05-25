import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DocumentUpdateManyWithoutBorrowerInput } from '../document/document-update-many-without-borrower.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ContractUpdateManyWithoutBorrowerInput } from '../contract/contract-update-many-without-borrower.input';
import { LocalUpdateManyWithoutBorrowerInput } from '../local/local-update-many-without-borrower.input';
export declare class BorrowerUpdateWithoutPhonesInput {
    id?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    address?: StringFieldUpdateOperationsInput;
    email?: NullableStringFieldUpdateOperationsInput;
    documents?: DocumentUpdateManyWithoutBorrowerInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    Contract?: ContractUpdateManyWithoutBorrowerInput;
    Local?: LocalUpdateManyWithoutBorrowerInput;
}
