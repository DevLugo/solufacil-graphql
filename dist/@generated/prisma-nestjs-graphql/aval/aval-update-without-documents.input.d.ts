import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PhoneUpdateManyWithoutAvalInput } from '../phone/phone-update-many-without-aval.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class AvalUpdateWithoutDocumentsInput {
    id?: StringFieldUpdateOperationsInput;
    phones?: PhoneUpdateManyWithoutAvalInput;
    email?: StringFieldUpdateOperationsInput;
    fullName?: StringFieldUpdateOperationsInput;
    firstName?: StringFieldUpdateOperationsInput;
    lastName?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
