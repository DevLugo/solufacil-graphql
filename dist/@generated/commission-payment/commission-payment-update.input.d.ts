import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput } from '../payment-schedule/payment-schedule-update-one-required-without-commission-payment.input';
import { LoanUpdateOneWithoutCommissionPaymentInput } from '../loan/loan-update-one-without-commission-payment.input';
import { EmployeeUpdateOneRequiredWithoutCommissionPaymentInput } from '../employee/employee-update-one-required-without-commission-payment.input';
import { EnumCommissionPaymentStatusFieldUpdateOperationsInput } from '../prisma/enum-commission-payment-status-field-update-operations.input';
export declare class CommissionPaymentUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    amount?: DecimalFieldUpdateOperationsInput;
    paymentSchedule?: PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput;
    loan?: LoanUpdateOneWithoutCommissionPaymentInput;
    employee?: EmployeeUpdateOneRequiredWithoutCommissionPaymentInput;
    status?: EnumCommissionPaymentStatusFieldUpdateOperationsInput;
}
