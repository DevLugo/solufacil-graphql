import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class AvalUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput;
    email?: StringFieldUpdateOperationsInput;
    fullName?: StringFieldUpdateOperationsInput;
    firstName?: StringFieldUpdateOperationsInput;
    lastName?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
