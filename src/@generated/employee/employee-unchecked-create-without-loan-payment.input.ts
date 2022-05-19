import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import { PhoneUncheckedCreateNestedManyWithoutEmployeeInput } from '../phone/phone-unchecked-create-nested-many-without-employee.input';
import { DocumentUncheckedCreateNestedManyWithoutEmployeeInput } from '../document/document-unchecked-create-nested-many-without-employee.input';
import { HideField } from '@nestjs/graphql';
import { LoanUncheckedCreateNestedManyWithoutEmployeeInput } from '../loan/loan-unchecked-create-nested-many-without-employee.input';
import { CommissionPaymentUncheckedCreateNestedManyWithoutEmployeeInput } from '../commission-payment/commission-payment-unchecked-create-nested-many-without-employee.input';
import { ContractUncheckedCreateNestedManyWithoutEmployeeInput } from '../contract/contract-unchecked-create-nested-many-without-employee.input';
import { ContractUncheckedCreateNestedManyWithoutLoanLeadInput } from '../contract/contract-unchecked-create-nested-many-without-loan-lead.input';
import { ExpensesUncheckedCreateNestedManyWithoutEmployeeInput } from '../expenses/expenses-unchecked-create-nested-many-without-employee.input';

@InputType()
export class EmployeeUncheckedCreateWithoutLoanPaymentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EmployeesTypes, {nullable:false})
    type!: keyof typeof EmployeesTypes;

    @Field(() => PhoneUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    phones?: PhoneUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => DocumentUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    documents?: DocumentUncheckedCreateNestedManyWithoutEmployeeInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => LoanUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    loan?: LoanUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => CommissionPaymentUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    commissionPayment?: CommissionPaymentUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => ContractUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    contractEmployee?: ContractUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => ContractUncheckedCreateNestedManyWithoutLoanLeadInput, {nullable:true})
    contractLoanLead?: ContractUncheckedCreateNestedManyWithoutLoanLeadInput;

    @Field(() => ExpensesUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    Expenses?: ExpensesUncheckedCreateNestedManyWithoutEmployeeInput;
}
