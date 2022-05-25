import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput } from '../payment-schedule/payment-schedule-unchecked-update-many-without-loan-payments.input';
export declare class LoanPaymentUncheckedUpdateWithoutLoanInput {
    id?: StringFieldUpdateOperationsInput;
    amount?: DecimalFieldUpdateOperationsInput;
    date?: DateTimeFieldUpdateOperationsInput;
    comments?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    paymentSchedules?: PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput;
    employeeId?: StringFieldUpdateOperationsInput;
}
