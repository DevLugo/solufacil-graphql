import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { PhoneUncheckedCreateNestedManyWithoutEmployeeInput } from '../phone/phone-unchecked-create-nested-many-without-employee.input';
import { DocumentUncheckedCreateNestedManyWithoutEmployeeInput } from '../document/document-unchecked-create-nested-many-without-employee.input';
import { ContractUncheckedCreateNestedManyWithoutEmployeeInput } from '../contract/contract-unchecked-create-nested-many-without-employee.input';
import { EmployeeUncheckedCreateNestedManyWithoutJefeInput } from './employee-unchecked-create-nested-many-without-jefe.input';

@InputType()
export class EmployeeUncheckedCreateWithoutJefeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EmployeesTypes, {nullable:false})
    type!: keyof typeof EmployeesTypes;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;

    @HideField()
    fullName!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => PhoneUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    phones?: PhoneUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => DocumentUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    documents?: DocumentUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => ContractUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    Contract?: ContractUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => EmployeeUncheckedCreateNestedManyWithoutJefeInput, {nullable:true})
    Employee?: EmployeeUncheckedCreateNestedManyWithoutJefeInput;
}
