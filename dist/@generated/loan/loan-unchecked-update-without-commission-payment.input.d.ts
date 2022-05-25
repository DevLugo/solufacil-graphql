import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLoanStateFieldUpdateOperationsInput } from '../prisma/enum-loan-state-field-update-operations.input';
import { LoanPaymentUncheckedUpdateManyWithoutLoanInput } from '../loan-payment/loan-payment-unchecked-update-many-without-loan.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PaymentScheduleUncheckedUpdateManyWithoutLoanInput } from '../payment-schedule/payment-schedule-unchecked-update-many-without-loan.input';
export declare class LoanUncheckedUpdateWithoutCommissionPaymentInput {
    id?: StringFieldUpdateOperationsInput;
    status?: EnumLoanStateFieldUpdateOperationsInput;
    payments?: LoanPaymentUncheckedUpdateManyWithoutLoanInput;
    weeklyPaymentAmount?: DecimalFieldUpdateOperationsInput;
    amountToPay?: DecimalFieldUpdateOperationsInput;
    signDate?: DateTimeFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    contractId?: StringFieldUpdateOperationsInput;
    loantypeId?: StringFieldUpdateOperationsInput;
    employeeId?: StringFieldUpdateOperationsInput;
    paymentSchedule?: PaymentScheduleUncheckedUpdateManyWithoutLoanInput;
}
