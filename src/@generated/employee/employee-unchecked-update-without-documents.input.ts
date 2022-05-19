import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEmployeesTypesFieldUpdateOperationsInput } from '../prisma/enum-employees-types-field-update-operations.input';
import { PhoneUncheckedUpdateManyWithoutEmployeeInput } from '../phone/phone-unchecked-update-many-without-employee.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { LoanUncheckedUpdateManyWithoutEmployeeInput } from '../loan/loan-unchecked-update-many-without-employee.input';
import { LoanPaymentUncheckedUpdateManyWithoutEmployeeInput } from '../loan-payment/loan-payment-unchecked-update-many-without-employee.input';
import { CommissionPaymentUncheckedUpdateManyWithoutEmployeeInput } from '../commission-payment/commission-payment-unchecked-update-many-without-employee.input';
import { ContractUncheckedUpdateManyWithoutEmployeeInput } from '../contract/contract-unchecked-update-many-without-employee.input';
import { ContractUncheckedUpdateManyWithoutLoanLeadInput } from '../contract/contract-unchecked-update-many-without-loan-lead.input';
import { ExpensesUncheckedUpdateManyWithoutEmployeeInput } from '../expenses/expenses-unchecked-update-many-without-employee.input';

@InputType()
export class EmployeeUncheckedUpdateWithoutDocumentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumEmployeesTypesFieldUpdateOperationsInput, {nullable:true})
    type?: EnumEmployeesTypesFieldUpdateOperationsInput;

    @Field(() => PhoneUncheckedUpdateManyWithoutEmployeeInput, {nullable:true})
    phones?: PhoneUncheckedUpdateManyWithoutEmployeeInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => LoanUncheckedUpdateManyWithoutEmployeeInput, {nullable:true})
    loan?: LoanUncheckedUpdateManyWithoutEmployeeInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => LoanPaymentUncheckedUpdateManyWithoutEmployeeInput, {nullable:true})
    loanPayment?: LoanPaymentUncheckedUpdateManyWithoutEmployeeInput;

    @Field(() => CommissionPaymentUncheckedUpdateManyWithoutEmployeeInput, {nullable:true})
    commissionPayment?: CommissionPaymentUncheckedUpdateManyWithoutEmployeeInput;

    @Field(() => ContractUncheckedUpdateManyWithoutEmployeeInput, {nullable:true})
    contractEmployee?: ContractUncheckedUpdateManyWithoutEmployeeInput;

    @Field(() => ContractUncheckedUpdateManyWithoutLoanLeadInput, {nullable:true})
    contractLoanLead?: ContractUncheckedUpdateManyWithoutLoanLeadInput;

    @Field(() => ExpensesUncheckedUpdateManyWithoutEmployeeInput, {nullable:true})
    Expenses?: ExpensesUncheckedUpdateManyWithoutEmployeeInput;
}