import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EmployeeUpdateManyWithoutUserInput } from '../employee/employee-update-many-without-user.input';
export declare class UserUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    email?: StringFieldUpdateOperationsInput;
    fullName?: StringFieldUpdateOperationsInput;
    firstName?: StringFieldUpdateOperationsInput;
    lastName?: StringFieldUpdateOperationsInput;
    password?: StringFieldUpdateOperationsInput;
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput;
    profilePicture?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    Employee?: EmployeeUpdateManyWithoutUserInput;
}
