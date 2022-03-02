import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DocumentUncheckedUpdateManyWithoutBorrowerInput } from '../document/document-unchecked-update-many-without-borrower.input';
import { ContractUncheckedUpdateManyWithoutBorrowerInput } from '../contract/contract-unchecked-update-many-without-borrower.input';
import { LocalUncheckedUpdateManyWithoutBorrowerInput } from '../local/local-unchecked-update-many-without-borrower.input';

@InputType()
export class BorrowerUncheckedUpdateWithoutPhonesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DocumentUncheckedUpdateManyWithoutBorrowerInput, {nullable:true})
    documents?: DocumentUncheckedUpdateManyWithoutBorrowerInput;

    @Field(() => ContractUncheckedUpdateManyWithoutBorrowerInput, {nullable:true})
    Contract?: ContractUncheckedUpdateManyWithoutBorrowerInput;

    @Field(() => LocalUncheckedUpdateManyWithoutBorrowerInput, {nullable:true})
    Local?: LocalUncheckedUpdateManyWithoutBorrowerInput;
}
