import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { LogUncheckedUpdateManyWithoutSectionInput } from '../log/log-unchecked-update-many-without-section.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class SystemSectionUncheckedUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    logs?: LogUncheckedUpdateManyWithoutSectionInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
