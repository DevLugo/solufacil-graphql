import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PhoneUncheckedUpdateManyWithoutBorrowerInput } from '../phone/phone-unchecked-update-many-without-borrower.input';
import { DocumentUncheckedUpdateManyWithoutBorrowerInput } from '../document/document-unchecked-update-many-without-borrower.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { LocalUncheckedUpdateManyWithoutBorrowerInput } from '../local/local-unchecked-update-many-without-borrower.input';
export declare class BorrowerUncheckedUpdateWithoutContractInput {
    id?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    address?: StringFieldUpdateOperationsInput;
    email?: NullableStringFieldUpdateOperationsInput;
    phones?: PhoneUncheckedUpdateManyWithoutBorrowerInput;
    documents?: DocumentUncheckedUpdateManyWithoutBorrowerInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    Local?: LocalUncheckedUpdateManyWithoutBorrowerInput;
}
