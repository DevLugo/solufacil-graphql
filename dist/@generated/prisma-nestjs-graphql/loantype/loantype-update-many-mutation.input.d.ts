import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class LoantypeUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    weekDuration?: IntFieldUpdateOperationsInput;
    rate?: FloatFieldUpdateOperationsInput;
    overdueRate?: FloatFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
