import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { EnumPaymentStateFieldUpdateOperationsInput } from '../prisma/enum-payment-state-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EmployeeUpdateOneRequiredWithoutExpensesInput } from '../employee/employee-update-one-required-without-expenses.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
export declare class ExpensesUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    amountToPay?: DecimalFieldUpdateOperationsInput;
    status?: EnumPaymentStateFieldUpdateOperationsInput;
    dueDate?: DateTimeFieldUpdateOperationsInput;
    payedAt?: DateTimeFieldUpdateOperationsInput;
    employee?: EmployeeUpdateOneRequiredWithoutExpensesInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    userId?: NullableStringFieldUpdateOperationsInput;
}
