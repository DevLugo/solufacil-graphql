import { EmployeesTypes } from '../prisma/employees-types.enum';
import { PhoneUncheckedCreateNestedManyWithoutEmployeeInput } from '../phone/phone-unchecked-create-nested-many-without-employee.input';
import { DocumentUncheckedCreateNestedManyWithoutEmployeeInput } from '../document/document-unchecked-create-nested-many-without-employee.input';
import { LoanUncheckedCreateNestedManyWithoutEmployeeInput } from '../loan/loan-unchecked-create-nested-many-without-employee.input';
import { LoanPaymentUncheckedCreateNestedManyWithoutEmployeeInput } from '../loan-payment/loan-payment-unchecked-create-nested-many-without-employee.input';
import { CommissionPaymentUncheckedCreateNestedManyWithoutEmployeeInput } from '../commission-payment/commission-payment-unchecked-create-nested-many-without-employee.input';
import { ContractUncheckedCreateNestedManyWithoutLoanLeadInput } from '../contract/contract-unchecked-create-nested-many-without-loan-lead.input';
import { ExpensesUncheckedCreateNestedManyWithoutEmployeeInput } from '../expenses/expenses-unchecked-create-nested-many-without-employee.input';
export declare class EmployeeUncheckedCreateWithoutContractEmployeeInput {
    id?: string;
    type: keyof typeof EmployeesTypes;
    phones?: PhoneUncheckedCreateNestedManyWithoutEmployeeInput;
    documents?: DocumentUncheckedCreateNestedManyWithoutEmployeeInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loan?: LoanUncheckedCreateNestedManyWithoutEmployeeInput;
    userId: string;
    loanPayment?: LoanPaymentUncheckedCreateNestedManyWithoutEmployeeInput;
    commissionPayment?: CommissionPaymentUncheckedCreateNestedManyWithoutEmployeeInput;
    contractLoanLead?: ContractUncheckedCreateNestedManyWithoutLoanLeadInput;
    Expenses?: ExpensesUncheckedCreateNestedManyWithoutEmployeeInput;
}
