import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEmployeesTypesFieldUpdateOperationsInput } from '../prisma/enum-employees-types-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PhoneUncheckedUpdateManyWithoutEmployeeInput } from '../phone/phone-unchecked-update-many-without-employee.input';
import { DocumentUncheckedUpdateManyWithoutEmployeeInput } from '../document/document-unchecked-update-many-without-employee.input';
import { ContractUncheckedUpdateManyWithoutEmployeeInput } from '../contract/contract-unchecked-update-many-without-employee.input';
import { EmployeeUncheckedUpdateManyWithoutJefeInput } from './employee-unchecked-update-many-without-jefe.input';

@InputType()
export class EmployeeUncheckedUpdateWithoutJefeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumEmployeesTypesFieldUpdateOperationsInput, {nullable:true})
    type?: EnumEmployeesTypesFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @HideField()
    fullName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PhoneUncheckedUpdateManyWithoutEmployeeInput, {nullable:true})
    phones?: PhoneUncheckedUpdateManyWithoutEmployeeInput;

    @Field(() => DocumentUncheckedUpdateManyWithoutEmployeeInput, {nullable:true})
    documents?: DocumentUncheckedUpdateManyWithoutEmployeeInput;

    @Field(() => ContractUncheckedUpdateManyWithoutEmployeeInput, {nullable:true})
    Contract?: ContractUncheckedUpdateManyWithoutEmployeeInput;

    @Field(() => EmployeeUncheckedUpdateManyWithoutJefeInput, {nullable:true})
    Employee?: EmployeeUncheckedUpdateManyWithoutJefeInput;
}