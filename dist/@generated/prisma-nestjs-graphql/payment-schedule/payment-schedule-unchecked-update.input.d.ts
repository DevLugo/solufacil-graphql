import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { EnumPaymentStateFieldUpdateOperationsInput } from '../prisma/enum-payment-state-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput } from '../loan-payment/loan-payment-unchecked-update-many-without-payment-schedules.input';
import { CommissionPaymentUncheckedUpdateManyWithoutPaymentScheduleInput } from '../commission-payment/commission-payment-unchecked-update-many-without-payment-schedule.input';
export declare class PaymentScheduleUncheckedUpdateInput {
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
    loanId?: StringFieldUpdateOperationsInput;
    loanPayments?: LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput;
    CommissionPayment?: CommissionPaymentUncheckedUpdateManyWithoutPaymentScheduleInput;
}
