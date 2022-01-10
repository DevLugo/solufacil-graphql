import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import * as Scalars from 'graphql-scalars';
import { DocumentCreateNestedManyWithoutEmployeeInput } from '../document/document-create-nested-many-without-employee.input';
import { ContractCreateNestedManyWithoutEmployeeInput } from '../contract/contract-create-nested-many-without-employee.input';

@InputType()
export class EmployeeCreateWithoutPhonesInput {

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

    @Field(() => DocumentCreateNestedManyWithoutEmployeeInput, {nullable:true})
    documents?: DocumentCreateNestedManyWithoutEmployeeInput;

    @Field(() => ContractCreateNestedManyWithoutEmployeeInput, {nullable:true})
    Contract?: ContractCreateNestedManyWithoutEmployeeInput;
}
