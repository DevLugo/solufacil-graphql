import { EmployeesTypes } from '../prisma/employees-types.enum';
import { PhoneCreateNestedManyWithoutEmployeeInput } from '../phone/phone-create-nested-many-without-employee.input';
import { DocumentCreateNestedManyWithoutEmployeeInput } from '../document/document-create-nested-many-without-employee.input';
import { UserCreateNestedOneWithoutEmployeeInput } from '../user/user-create-nested-one-without-employee.input';
import { LoanPaymentCreateNestedManyWithoutEmployeeInput } from '../loan-payment/loan-payment-create-nested-many-without-employee.input';
import { CommissionPaymentCreateNestedManyWithoutEmployeeInput } from '../commission-payment/commission-payment-create-nested-many-without-employee.input';
import { ContractCreateNestedManyWithoutEmployeeInput } from '../contract/contract-create-nested-many-without-employee.input';
import { ContractCreateNestedManyWithoutLoanLeadInput } from '../contract/contract-create-nested-many-without-loan-lead.input';
import { ExpensesCreateNestedManyWithoutEmployeeInput } from '../expenses/expenses-create-nested-many-without-employee.input';
export declare class EmployeeCreateWithoutLoanInput {
    id?: string;
    type: keyof typeof EmployeesTypes;
    phones?: PhoneCreateNestedManyWithoutEmployeeInput;
    documents?: DocumentCreateNestedManyWithoutEmployeeInput;
    user: UserCreateNestedOneWithoutEmployeeInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput;
    commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput;
    contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput;
    contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput;
    Expenses?: ExpensesCreateNestedManyWithoutEmployeeInput;
}
