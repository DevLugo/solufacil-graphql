import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DocumentUpdateManyWithoutAvalInput } from '../document/document-update-many-without-aval.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class AvalUpdateWithoutPhonesInput {
    id?: StringFieldUpdateOperationsInput;
    email?: StringFieldUpdateOperationsInput;
    fullName?: StringFieldUpdateOperationsInput;
    firstName?: StringFieldUpdateOperationsInput;
    lastName?: StringFieldUpdateOperationsInput;
    documents?: DocumentUpdateManyWithoutAvalInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
