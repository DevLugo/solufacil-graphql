import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { EnumPaymentStateFieldUpdateOperationsInput } from '../prisma/enum-payment-state-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { LoanUpdateOneRequiredWithoutPaymentScheduleInput } from '../loan/loan-update-one-required-without-payment-schedule.input';
import { CommissionPaymentUpdateManyWithoutPaymentScheduleInput } from '../commission-payment/commission-payment-update-many-without-payment-schedule.input';
export declare class PaymentScheduleUpdateWithoutLoanPaymentsInput {
    id?: StringFieldUpdateOperationsInput;
    numeration?: IntFieldUpdateOperationsInput;
    amountToPay?: DecimalFieldUpdateOperationsInput;
    paidAmount?: DecimalFieldUpdateOperationsInput;
    returnToCapital?: DecimalFieldUpdateOperationsInput;
    profit?: DecimalFieldUpdateOperationsInput;
    status?: EnumPaymentStateFieldUpdateOperationsInput;
    delayed?: BoolFieldUpdateOperationsInput;
    dueDate?: DateTimeFieldUpdateOperationsInput;
    details?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    loan?: LoanUpdateOneRequiredWithoutPaymentScheduleInput;
    CommissionPayment?: CommissionPaymentUpdateManyWithoutPaymentScheduleInput;
}
