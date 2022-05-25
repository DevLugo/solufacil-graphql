import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { SystemSectionUpdateOneRequiredWithoutLogsInput } from '../system-section/system-section-update-one-required-without-logs.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class LogUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    section?: SystemSectionUpdateOneRequiredWithoutLogsInput;
    requestBody?: StringFieldUpdateOperationsInput;
    requestType?: StringFieldUpdateOperationsInput;
    deviceType?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
