import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { LoanUncheckedUpdateManyWithoutContractInput } from '../loan/loan-unchecked-update-many-without-contract.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class ContractUncheckedUpdateWithoutDocumentsInput {
    id?: StringFieldUpdateOperationsInput;
    borrowerId?: StringFieldUpdateOperationsInput;
    loans?: LoanUncheckedUpdateManyWithoutContractInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    dueDate?: DateTimeFieldUpdateOperationsInput;
    signDate?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    contractTypeId?: StringFieldUpdateOperationsInput;
    loanLeadId?: StringFieldUpdateOperationsInput;
    employeeId?: StringFieldUpdateOperationsInput;
}
