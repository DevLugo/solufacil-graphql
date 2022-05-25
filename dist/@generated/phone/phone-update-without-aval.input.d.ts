import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BorrowerUpdateOneWithoutPhonesInput } from '../borrower/borrower-update-one-without-phones.input';
import { EmployeeUpdateOneWithoutPhonesInput } from '../employee/employee-update-one-without-phones.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class PhoneUpdateWithoutAvalInput {
    id?: StringFieldUpdateOperationsInput;
    number?: StringFieldUpdateOperationsInput;
    Borrower?: BorrowerUpdateOneWithoutPhonesInput;
    Employee?: EmployeeUpdateOneWithoutPhonesInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
