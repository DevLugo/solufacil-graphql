import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EmployeeUpdateOneWithoutPhonesInput } from '../employee/employee-update-one-without-phones.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AvalUpdateOneWithoutPhonesInput } from '../aval/aval-update-one-without-phones.input';
export declare class PhoneUpdateWithoutBorrowerInput {
    id?: StringFieldUpdateOperationsInput;
    number?: StringFieldUpdateOperationsInput;
    Employee?: EmployeeUpdateOneWithoutPhonesInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    aval?: AvalUpdateOneWithoutPhonesInput;
}
