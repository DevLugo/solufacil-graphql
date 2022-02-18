import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import { HideField } from '@nestjs/graphql';
import { PhoneUncheckedCreateNestedManyWithoutEmployeeInput } from '../phone/phone-unchecked-create-nested-many-without-employee.input';
import { DocumentUncheckedCreateNestedManyWithoutEmployeeInput } from '../document/document-unchecked-create-nested-many-without-employee.input';
import { ContractUncheckedCreateNestedManyWithoutEmployeeInput } from '../contract/contract-unchecked-create-nested-many-without-employee.input';
import { LoanPaymentUncheckedCreateNestedManyWithoutEmployeeInput } from '../loan-payment/loan-payment-unchecked-create-nested-many-without-employee.input';

@InputType()
export class EmployeeUncheckedCreateWithoutLoanInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EmployeesTypes, {nullable:false})
    type!: keyof typeof EmployeesTypes;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => PhoneUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    phones?: PhoneUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => DocumentUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    documents?: DocumentUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => ContractUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    contracts?: ContractUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => LoanPaymentUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    loanPayment?: LoanPaymentUncheckedCreateNestedManyWithoutEmployeeInput;
}
