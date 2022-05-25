import { EmployeesTypes } from '../prisma/employees-types.enum';
import { PhoneCreateNestedManyWithoutEmployeeInput } from '../phone/phone-create-nested-many-without-employee.input';
import { UserCreateNestedOneWithoutEmployeeInput } from '../user/user-create-nested-one-without-employee.input';
import { LoanCreateNestedManyWithoutEmployeeInput } from '../loan/loan-create-nested-many-without-employee.input';
import { LoanPaymentCreateNestedManyWithoutEmployeeInput } from '../loan-payment/loan-payment-create-nested-many-without-employee.input';
import { CommissionPaymentCreateNestedManyWithoutEmployeeInput } from '../commission-payment/commission-payment-create-nested-many-without-employee.input';
import { ContractCreateNestedManyWithoutEmployeeInput } from '../contract/contract-create-nested-many-without-employee.input';
import { ContractCreateNestedManyWithoutLoanLeadInput } from '../contract/contract-create-nested-many-without-loan-lead.input';
import { ExpensesCreateNestedManyWithoutEmployeeInput } from '../expenses/expenses-create-nested-many-without-employee.input';
export declare class EmployeeCreateWithoutDocumentsInput {
    id?: string;
    type: keyof typeof EmployeesTypes;
    phones?: PhoneCreateNestedManyWithoutEmployeeInput;
    user: UserCreateNestedOneWithoutEmployeeInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loan?: LoanCreateNestedManyWithoutEmployeeInput;
    loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput;
    commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput;
    contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput;
    contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput;
    Expenses?: ExpensesCreateNestedManyWithoutEmployeeInput;
}
