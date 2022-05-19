import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import { PhoneCreateNestedManyWithoutEmployeeInput } from '../phone/phone-create-nested-many-without-employee.input';
import { DocumentCreateNestedManyWithoutEmployeeInput } from '../document/document-create-nested-many-without-employee.input';
import { UserCreateNestedOneWithoutEmployeeInput } from '../user/user-create-nested-one-without-employee.input';
import { LoanCreateNestedManyWithoutEmployeeInput } from '../loan/loan-create-nested-many-without-employee.input';
import { LoanPaymentCreateNestedManyWithoutEmployeeInput } from '../loan-payment/loan-payment-create-nested-many-without-employee.input';
import { CommissionPaymentCreateNestedManyWithoutEmployeeInput } from '../commission-payment/commission-payment-create-nested-many-without-employee.input';
import { ContractCreateNestedManyWithoutEmployeeInput } from '../contract/contract-create-nested-many-without-employee.input';
import { ContractCreateNestedManyWithoutLoanLeadInput } from '../contract/contract-create-nested-many-without-loan-lead.input';
import { ExpensesCreateNestedManyWithoutEmployeeInput } from '../expenses/expenses-create-nested-many-without-employee.input';

@InputType()
export class EmployeeCreateInput {

    @HideField()
    id?: string;

    @Field(() => EmployeesTypes, {nullable:false})
    type!: keyof typeof EmployeesTypes;

    @Field(() => PhoneCreateNestedManyWithoutEmployeeInput, {nullable:true})
    phones?: PhoneCreateNestedManyWithoutEmployeeInput;

    @Field(() => DocumentCreateNestedManyWithoutEmployeeInput, {nullable:true})
    documents?: DocumentCreateNestedManyWithoutEmployeeInput;

    @Field(() => UserCreateNestedOneWithoutEmployeeInput, {nullable:false})
    user!: UserCreateNestedOneWithoutEmployeeInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => LoanCreateNestedManyWithoutEmployeeInput, {nullable:true})
    loan?: LoanCreateNestedManyWithoutEmployeeInput;

    @Field(() => LoanPaymentCreateNestedManyWithoutEmployeeInput, {nullable:true})
    loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput;

    @Field(() => CommissionPaymentCreateNestedManyWithoutEmployeeInput, {nullable:true})
    commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput;

    @Field(() => ContractCreateNestedManyWithoutEmployeeInput, {nullable:true})
    contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput;

    @Field(() => ContractCreateNestedManyWithoutLoanLeadInput, {nullable:true})
    contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput;

    @Field(() => ExpensesCreateNestedManyWithoutEmployeeInput, {nullable:true})
    Expenses?: ExpensesCreateNestedManyWithoutEmployeeInput;
}
