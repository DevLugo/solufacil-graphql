import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { LoanUpdateManyWithoutLoanTypeInput } from '../loan/loan-update-many-without-loan-type.input';
import { ComissionPaymentConfigurationUpdateManyWithoutLoanTypeInput } from '../comission-payment-configuration/comission-payment-configuration-update-many-without-loan-type.input';
export declare class LoantypeUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    weekDuration?: IntFieldUpdateOperationsInput;
    rate?: FloatFieldUpdateOperationsInput;
    overdueRate?: FloatFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    Loan?: LoanUpdateManyWithoutLoanTypeInput;
    ComissionPaymentConfiguration?: ComissionPaymentConfigurationUpdateManyWithoutLoanTypeInput;
}
