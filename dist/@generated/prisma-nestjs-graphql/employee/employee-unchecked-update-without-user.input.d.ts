import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEmployeesTypesFieldUpdateOperationsInput } from '../prisma/enum-employees-types-field-update-operations.input';
import { PhoneUncheckedUpdateManyWithoutEmployeeInput } from '../phone/phone-unchecked-update-many-without-employee.input';
import { DocumentUncheckedUpdateManyWithoutEmployeeInput } from '../document/document-unchecked-update-many-without-employee.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { LoanUncheckedUpdateManyWithoutEmployeeInput } from '../loan/loan-unchecked-update-many-without-employee.input';
import { LoanPaymentUncheckedUpdateManyWithoutEmployeeInput } from '../loan-payment/loan-payment-unchecked-update-many-without-employee.input';
import { CommissionPaymentUncheckedUpdateManyWithoutEmployeeInput } from '../commission-payment/commission-payment-unchecked-update-many-without-employee.input';
import { ContractUncheckedUpdateManyWithoutEmployeeInput } from '../contract/contract-unchecked-update-many-without-employee.input';
import { ContractUncheckedUpdateManyWithoutLoanLeadInput } from '../contract/contract-unchecked-update-many-without-loan-lead.input';
import { ExpensesUncheckedUpdateManyWithoutEmployeeInput } from '../expenses/expenses-unchecked-update-many-without-employee.input';
export declare class EmployeeUncheckedUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput;
    type?: EnumEmployeesTypesFieldUpdateOperationsInput;
    phones?: PhoneUncheckedUpdateManyWithoutEmployeeInput;
    documents?: DocumentUncheckedUpdateManyWithoutEmployeeInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    loan?: LoanUncheckedUpdateManyWithoutEmployeeInput;
    loanPayment?: LoanPaymentUncheckedUpdateManyWithoutEmployeeInput;
    commissionPayment?: CommissionPaymentUncheckedUpdateManyWithoutEmployeeInput;
    contractEmployee?: ContractUncheckedUpdateManyWithoutEmployeeInput;
    contractLoanLead?: ContractUncheckedUpdateManyWithoutLoanLeadInput;
    Expenses?: ExpensesUncheckedUpdateManyWithoutEmployeeInput;
}
