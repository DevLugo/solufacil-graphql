import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { LoanUncheckedUpdateManyWithoutLoanTypeInput } from '../loan/loan-unchecked-update-many-without-loan-type.input';
import { ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput } from '../comission-payment-configuration/comission-payment-configuration-unchecked-update-many-without-loan-type.input';
export declare class LoantypeUncheckedUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    weekDuration?: IntFieldUpdateOperationsInput;
    rate?: FloatFieldUpdateOperationsInput;
    overdueRate?: FloatFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    Loan?: LoanUncheckedUpdateManyWithoutLoanTypeInput;
    ComissionPaymentConfiguration?: ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput;
}
