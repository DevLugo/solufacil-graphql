import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PhoneUpdateManyWithoutBorrowerInput } from '../phone/phone-update-many-without-borrower.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ContractUpdateManyWithoutBorrowerInput } from '../contract/contract-update-many-without-borrower.input';
import { LocalUpdateManyWithoutBorrowerInput } from '../local/local-update-many-without-borrower.input';
export declare class BorrowerUpdateWithoutDocumentsInput {
    id?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    address?: StringFieldUpdateOperationsInput;
    email?: NullableStringFieldUpdateOperationsInput;
    phones?: PhoneUpdateManyWithoutBorrowerInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    Contract?: ContractUpdateManyWithoutBorrowerInput;
    Local?: LocalUpdateManyWithoutBorrowerInput;
}
