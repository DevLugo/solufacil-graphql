import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEmployeesTypesFieldUpdateOperationsInput } from '../prisma/enum-employees-types-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PhoneUpdateManyWithoutEmployerInput } from '../phone/phone-update-many-without-employer.input';
import { DocumentUpdateManyWithoutEmployerInput } from '../document/document-update-many-without-employer.input';
import { ContractUpdateManyWithoutEmployerInput } from '../contract/contract-update-many-without-employer.input';

@InputType()
export class EmployerUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumEmployeesTypesFieldUpdateOperationsInput, {nullable:true})
    type?: EnumEmployeesTypesFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PhoneUpdateManyWithoutEmployerInput, {nullable:true})
    phones?: PhoneUpdateManyWithoutEmployerInput;

    @Field(() => DocumentUpdateManyWithoutEmployerInput, {nullable:true})
    documents?: DocumentUpdateManyWithoutEmployerInput;

    @Field(() => ContractUpdateManyWithoutEmployerInput, {nullable:true})
    Contract?: ContractUpdateManyWithoutEmployerInput;
}
