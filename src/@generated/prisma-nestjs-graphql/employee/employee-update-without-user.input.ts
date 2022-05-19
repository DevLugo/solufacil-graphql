import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEmployeesTypesFieldUpdateOperationsInput } from '../prisma/enum-employees-types-field-update-operations.input';
import { PhoneUpdateManyWithoutEmployeeInput } from '../phone/phone-update-many-without-employee.input';
import { DocumentUpdateManyWithoutEmployeeInput } from '../document/document-update-many-without-employee.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { LoanUpdateManyWithoutEmployeeInput } from '../loan/loan-update-many-without-employee.input';
import { LoanPaymentUpdateManyWithoutEmployeeInput } from '../loan-payment/loan-payment-update-many-without-employee.input';
import { CommissionPaymentUpdateManyWithoutEmployeeInput } from '../commission-payment/commission-payment-update-many-without-employee.input';
import { ContractUpdateManyWithoutEmployeeInput } from '../contract/contract-update-many-without-employee.input';
import { ContractUpdateManyWithoutLoanLeadInput } from '../contract/contract-update-many-without-loan-lead.input';
import { ExpensesUpdateManyWithoutEmployeeInput } from '../expenses/expenses-update-many-without-employee.input';

@InputType()
export class EmployeeUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumEmployeesTypesFieldUpdateOperationsInput, {nullable:true})
    type?: EnumEmployeesTypesFieldUpdateOperationsInput;

    @Field(() => PhoneUpdateManyWithoutEmployeeInput, {nullable:true})
    phones?: PhoneUpdateManyWithoutEmployeeInput;

    @Field(() => DocumentUpdateManyWithoutEmployeeInput, {nullable:true})
    documents?: DocumentUpdateManyWithoutEmployeeInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => LoanUpdateManyWithoutEmployeeInput, {nullable:true})
    loan?: LoanUpdateManyWithoutEmployeeInput;

    @Field(() => LoanPaymentUpdateManyWithoutEmployeeInput, {nullable:true})
    loanPayment?: LoanPaymentUpdateManyWithoutEmployeeInput;

    @Field(() => CommissionPaymentUpdateManyWithoutEmployeeInput, {nullable:true})
    commissionPayment?: CommissionPaymentUpdateManyWithoutEmployeeInput;

    @Field(() => ContractUpdateManyWithoutEmployeeInput, {nullable:true})
    contractEmployee?: ContractUpdateManyWithoutEmployeeInput;

    @Field(() => ContractUpdateManyWithoutLoanLeadInput, {nullable:true})
    contractLoanLead?: ContractUpdateManyWithoutLoanLeadInput;

    @Field(() => ExpensesUpdateManyWithoutEmployeeInput, {nullable:true})
    Expenses?: ExpensesUpdateManyWithoutEmployeeInput;
}
