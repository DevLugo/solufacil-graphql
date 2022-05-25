import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PhoneUncheckedUpdateManyWithoutAvalInput } from '../phone/phone-unchecked-update-many-without-aval.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class AvalUncheckedUpdateWithoutDocumentsInput {
    id?: StringFieldUpdateOperationsInput;
    phones?: PhoneUncheckedUpdateManyWithoutAvalInput;
    email?: StringFieldUpdateOperationsInput;
    fullName?: StringFieldUpdateOperationsInput;
    firstName?: StringFieldUpdateOperationsInput;
    lastName?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
