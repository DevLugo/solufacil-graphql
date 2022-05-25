import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLoanStateFieldUpdateOperationsInput } from '../prisma/enum-loan-state-field-update-operations.input';
import { LoanPaymentUpdateManyWithoutLoanInput } from '../loan-payment/loan-payment-update-many-without-loan.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { LoantypeUpdateOneRequiredWithoutLoanInput } from '../loantype/loantype-update-one-required-without-loan.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EmployeeUpdateOneRequiredWithoutLoanInput } from '../employee/employee-update-one-required-without-loan.input';
import { PaymentScheduleUpdateManyWithoutLoanInput } from '../payment-schedule/payment-schedule-update-many-without-loan.input';
import { CommissionPaymentUpdateManyWithoutLoanInput } from '../commission-payment/commission-payment-update-many-without-loan.input';
export declare class LoanUpdateWithoutContractInput {
    id?: StringFieldUpdateOperationsInput;
    status?: EnumLoanStateFieldUpdateOperationsInput;
    payments?: LoanPaymentUpdateManyWithoutLoanInput;
    weeklyPaymentAmount?: DecimalFieldUpdateOperationsInput;
    amountToPay?: DecimalFieldUpdateOperationsInput;
    loanType?: LoantypeUpdateOneRequiredWithoutLoanInput;
    signDate?: DateTimeFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    employee?: EmployeeUpdateOneRequiredWithoutLoanInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    paymentSchedule?: PaymentScheduleUpdateManyWithoutLoanInput;
    CommissionPayment?: CommissionPaymentUpdateManyWithoutLoanInput;
}
