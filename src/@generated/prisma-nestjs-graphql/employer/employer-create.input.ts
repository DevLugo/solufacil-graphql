import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import { PhoneCreateNestedManyWithoutEmployerInput } from '../phone/phone-create-nested-many-without-employer.input';
import { DocumentCreateNestedManyWithoutEmployerInput } from '../document/document-create-nested-many-without-employer.input';
import { ContractCreateNestedManyWithoutEmployerInput } from '../contract/contract-create-nested-many-without-employer.input';

@InputType()
export class EmployerCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EmployeesTypes, {nullable:false})
    type!: keyof typeof EmployeesTypes;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PhoneCreateNestedManyWithoutEmployerInput, {nullable:true})
    phones?: PhoneCreateNestedManyWithoutEmployerInput;

    @Field(() => DocumentCreateNestedManyWithoutEmployerInput, {nullable:true})
    documents?: DocumentCreateNestedManyWithoutEmployerInput;

    @Field(() => ContractCreateNestedManyWithoutEmployerInput, {nullable:true})
    Contract?: ContractCreateNestedManyWithoutEmployerInput;
}
