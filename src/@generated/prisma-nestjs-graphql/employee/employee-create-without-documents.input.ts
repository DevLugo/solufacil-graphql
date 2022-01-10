import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import * as Scalars from 'graphql-scalars';
import { PhoneCreateNestedManyWithoutEmployeeInput } from '../phone/phone-create-nested-many-without-employee.input';
import { ContractCreateNestedManyWithoutEmployeeInput } from '../contract/contract-create-nested-many-without-employee.input';

@InputType()
export class EmployeeCreateWithoutDocumentsInput {

    @HideField()
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

    @Field(() => PhoneCreateNestedManyWithoutEmployeeInput, {nullable:true})
    phones?: PhoneCreateNestedManyWithoutEmployeeInput;

    @Field(() => ContractCreateNestedManyWithoutEmployeeInput, {nullable:true})
    Contract?: ContractCreateNestedManyWithoutEmployeeInput;
}
