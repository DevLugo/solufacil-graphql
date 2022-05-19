import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PhoneUncheckedUpdateManyWithoutBorrowerInput } from '../phone/phone-unchecked-update-many-without-borrower.input';
import { DocumentUncheckedUpdateManyWithoutBorrowerInput } from '../document/document-unchecked-update-many-without-borrower.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { ContractUncheckedUpdateManyWithoutBorrowerInput } from '../contract/contract-unchecked-update-many-without-borrower.input';
import { LocalUncheckedUpdateManyWithoutBorrowerInput } from '../local/local-unchecked-update-many-without-borrower.input';

@InputType()
export class BorrowerUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => PhoneUncheckedUpdateManyWithoutBorrowerInput, {nullable:true})
    phones?: PhoneUncheckedUpdateManyWithoutBorrowerInput;

    @Field(() => DocumentUncheckedUpdateManyWithoutBorrowerInput, {nullable:true})
    documents?: DocumentUncheckedUpdateManyWithoutBorrowerInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ContractUncheckedUpdateManyWithoutBorrowerInput, {nullable:true})
    Contract?: ContractUncheckedUpdateManyWithoutBorrowerInput;

    @Field(() => LocalUncheckedUpdateManyWithoutBorrowerInput, {nullable:true})
    Local?: LocalUncheckedUpdateManyWithoutBorrowerInput;
}
