import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEmployeesTypesFieldUpdateOperationsInput } from '../prisma/enum-employees-types-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DocumentUncheckedUpdateManyWithoutEmployerInput } from '../document/document-unchecked-update-many-without-employer.input';
import { ContractUncheckedUpdateManyWithoutEmployerInput } from '../contract/contract-unchecked-update-many-without-employer.input';

@InputType()
export class EmployerUncheckedUpdateWithoutPhonesInput {

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

    @Field(() => DocumentUncheckedUpdateManyWithoutEmployerInput, {nullable:true})
    documents?: DocumentUncheckedUpdateManyWithoutEmployerInput;

    @Field(() => ContractUncheckedUpdateManyWithoutEmployerInput, {nullable:true})
    Contract?: ContractUncheckedUpdateManyWithoutEmployerInput;
}
