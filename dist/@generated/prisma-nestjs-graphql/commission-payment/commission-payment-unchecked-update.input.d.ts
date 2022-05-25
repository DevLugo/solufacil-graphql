import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumCommissionPaymentStatusFieldUpdateOperationsInput } from '../prisma/enum-commission-payment-status-field-update-operations.input';
export declare class CommissionPaymentUncheckedUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    amount?: DecimalFieldUpdateOperationsInput;
    loanId?: NullableStringFieldUpdateOperationsInput;
    paymentScheduleId?: StringFieldUpdateOperationsInput;
    employeeId?: StringFieldUpdateOperationsInput;
    status?: EnumCommissionPaymentStatusFieldUpdateOperationsInput;
}
