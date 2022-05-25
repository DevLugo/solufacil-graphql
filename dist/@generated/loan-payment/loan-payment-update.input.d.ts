import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PaymentScheduleUpdateManyWithoutLoanPaymentsInput } from '../payment-schedule/payment-schedule-update-many-without-loan-payments.input';
import { LoanUpdateOneRequiredWithoutPaymentsInput } from '../loan/loan-update-one-required-without-payments.input';
import { EmployeeUpdateOneRequiredWithoutLoanPaymentInput } from '../employee/employee-update-one-required-without-loan-payment.input';
export declare class LoanPaymentUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    amount?: DecimalFieldUpdateOperationsInput;
    date?: DateTimeFieldUpdateOperationsInput;
    comments?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    paymentSchedules?: PaymentScheduleUpdateManyWithoutLoanPaymentsInput;
    loan?: LoanUpdateOneRequiredWithoutPaymentsInput;
    employee?: EmployeeUpdateOneRequiredWithoutLoanPaymentInput;
}
