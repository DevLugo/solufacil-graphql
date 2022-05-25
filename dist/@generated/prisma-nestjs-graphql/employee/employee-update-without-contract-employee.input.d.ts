import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEmployeesTypesFieldUpdateOperationsInput } from '../prisma/enum-employees-types-field-update-operations.input';
import { PhoneUpdateManyWithoutEmployeeInput } from '../phone/phone-update-many-without-employee.input';
import { DocumentUpdateManyWithoutEmployeeInput } from '../document/document-update-many-without-employee.input';
import { UserUpdateOneRequiredWithoutEmployeeInput } from '../user/user-update-one-required-without-employee.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { LoanUpdateManyWithoutEmployeeInput } from '../loan/loan-update-many-without-employee.input';
import { LoanPaymentUpdateManyWithoutEmployeeInput } from '../loan-payment/loan-payment-update-many-without-employee.input';
import { CommissionPaymentUpdateManyWithoutEmployeeInput } from '../commission-payment/commission-payment-update-many-without-employee.input';
import { ContractUpdateManyWithoutLoanLeadInput } from '../contract/contract-update-many-without-loan-lead.input';
import { ExpensesUpdateManyWithoutEmployeeInput } from '../expenses/expenses-update-many-without-employee.input';
export declare class EmployeeUpdateWithoutContractEmployeeInput {
    id?: StringFieldUpdateOperationsInput;
    type?: EnumEmployeesTypesFieldUpdateOperationsInput;
    phones?: PhoneUpdateManyWithoutEmployeeInput;
    documents?: DocumentUpdateManyWithoutEmployeeInput;
    user?: UserUpdateOneRequiredWithoutEmployeeInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    loan?: LoanUpdateManyWithoutEmployeeInput;
    loanPayment?: LoanPaymentUpdateManyWithoutEmployeeInput;
    commissionPayment?: CommissionPaymentUpdateManyWithoutEmployeeInput;
    contractLoanLead?: ContractUpdateManyWithoutLoanLeadInput;
    Expenses?: ExpensesUpdateManyWithoutEmployeeInput;
}
