import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import { DocumentCreateNestedManyWithoutEmployeeInput } from '../document/document-create-nested-many-without-employee.input';
import { UserCreateNestedOneWithoutEmployeeInput } from '../user/user-create-nested-one-without-employee.input';
import { ContractCreateNestedManyWithoutEmployeeInput } from '../contract/contract-create-nested-many-without-employee.input';
import { LoanCreateNestedManyWithoutEmployeeInput } from '../loan/loan-create-nested-many-without-employee.input';
import { LoanPaymentCreateNestedManyWithoutEmployeeInput } from '../loan-payment/loan-payment-create-nested-many-without-employee.input';

@InputType()
export class EmployeeCreateWithoutPhonesInput {

    @HideField()
    id?: string;

    @Field(() => EmployeesTypes, {nullable:false})
    type!: keyof typeof EmployeesTypes;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => DocumentCreateNestedManyWithoutEmployeeInput, {nullable:true})
    documents?: DocumentCreateNestedManyWithoutEmployeeInput;

    @Field(() => UserCreateNestedOneWithoutEmployeeInput, {nullable:false})
    user!: UserCreateNestedOneWithoutEmployeeInput;

    @Field(() => ContractCreateNestedManyWithoutEmployeeInput, {nullable:true})
    contracts?: ContractCreateNestedManyWithoutEmployeeInput;

    @Field(() => LoanCreateNestedManyWithoutEmployeeInput, {nullable:true})
    loan?: LoanCreateNestedManyWithoutEmployeeInput;

    @Field(() => LoanPaymentCreateNestedManyWithoutEmployeeInput, {nullable:true})
    loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput;
}
