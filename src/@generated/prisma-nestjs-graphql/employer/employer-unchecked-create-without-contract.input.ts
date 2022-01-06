import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import { PhoneUncheckedCreateNestedManyWithoutEmployerInput } from '../phone/phone-unchecked-create-nested-many-without-employer.input';
import { DocumentUncheckedCreateNestedManyWithoutEmployerInput } from '../document/document-unchecked-create-nested-many-without-employer.input';

@InputType()
export class EmployerUncheckedCreateWithoutContractInput {

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

    @Field(() => PhoneUncheckedCreateNestedManyWithoutEmployerInput, {nullable:true})
    phones?: PhoneUncheckedCreateNestedManyWithoutEmployerInput;

    @Field(() => DocumentUncheckedCreateNestedManyWithoutEmployerInput, {nullable:true})
    documents?: DocumentUncheckedCreateNestedManyWithoutEmployerInput;
}
