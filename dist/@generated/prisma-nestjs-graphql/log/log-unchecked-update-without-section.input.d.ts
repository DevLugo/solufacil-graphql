import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class LogUncheckedUpdateWithoutSectionInput {
    id?: StringFieldUpdateOperationsInput;
    requestBody?: StringFieldUpdateOperationsInput;
    requestType?: StringFieldUpdateOperationsInput;
    deviceType?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
