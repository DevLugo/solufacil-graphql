import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class ContractUncheckedUpdateManyWithoutContractInput {
    id?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    dueDate?: DateTimeFieldUpdateOperationsInput;
    signDate?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    contractTypeId?: StringFieldUpdateOperationsInput;
    loanLeadId?: StringFieldUpdateOperationsInput;
    employeeId?: StringFieldUpdateOperationsInput;
}
