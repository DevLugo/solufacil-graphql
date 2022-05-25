import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { LogUpdateManyWithoutSectionInput } from '../log/log-update-many-without-section.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class SystemSectionUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    logs?: LogUpdateManyWithoutSectionInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
