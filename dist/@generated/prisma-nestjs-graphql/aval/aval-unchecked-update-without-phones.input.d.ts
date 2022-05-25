import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DocumentUncheckedUpdateManyWithoutAvalInput } from '../document/document-unchecked-update-many-without-aval.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class AvalUncheckedUpdateWithoutPhonesInput {
    id?: StringFieldUpdateOperationsInput;
    email?: StringFieldUpdateOperationsInput;
    fullName?: StringFieldUpdateOperationsInput;
    firstName?: StringFieldUpdateOperationsInput;
    lastName?: StringFieldUpdateOperationsInput;
    documents?: DocumentUncheckedUpdateManyWithoutAvalInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
