import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BorrowerUpdateOneRequiredWithoutContractInput } from '../borrower/borrower-update-one-required-without-contract.input';
import { DocumentUpdateManyWithoutContractInput } from '../document/document-update-many-without-contract.input';
import { LoanUpdateManyWithoutContractInput } from '../loan/loan-update-many-without-contract.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ContractTypeUpdateOneRequiredWithoutContractInput } from '../contract-type/contract-type-update-one-required-without-contract.input';
import { EmployeeUpdateOneRequiredWithoutContractEmployeeInput } from '../employee/employee-update-one-required-without-contract-employee.input';
export declare class ContractUpdateWithoutLoanLeadInput {
    id?: StringFieldUpdateOperationsInput;
    borrower?: BorrowerUpdateOneRequiredWithoutContractInput;
    documents?: DocumentUpdateManyWithoutContractInput;
    loans?: LoanUpdateManyWithoutContractInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    dueDate?: DateTimeFieldUpdateOperationsInput;
    signDate?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    contractType?: ContractTypeUpdateOneRequiredWithoutContractInput;
    employee?: EmployeeUpdateOneRequiredWithoutContractEmployeeInput;
}
