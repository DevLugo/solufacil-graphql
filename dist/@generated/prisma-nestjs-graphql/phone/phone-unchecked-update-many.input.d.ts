import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class PhoneUncheckedUpdateManyInput {
    id?: StringFieldUpdateOperationsInput;
    number?: StringFieldUpdateOperationsInput;
    borrowerId?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    avalId?: NullableStringFieldUpdateOperationsInput;
    employeeId?: NullableStringFieldUpdateOperationsInput;
}
