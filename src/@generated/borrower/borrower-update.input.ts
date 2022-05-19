import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PhoneUpdateManyWithoutBorrowerInput } from '../phone/phone-update-many-without-borrower.input';
import { DocumentUpdateManyWithoutBorrowerInput } from '../document/document-update-many-without-borrower.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { ContractUpdateManyWithoutBorrowerInput } from '../contract/contract-update-many-without-borrower.input';
import { LocalUpdateManyWithoutBorrowerInput } from '../local/local-update-many-without-borrower.input';

@InputType()
export class BorrowerUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => PhoneUpdateManyWithoutBorrowerInput, {nullable:true})
    phones?: PhoneUpdateManyWithoutBorrowerInput;

    @Field(() => DocumentUpdateManyWithoutBorrowerInput, {nullable:true})
    documents?: DocumentUpdateManyWithoutBorrowerInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ContractUpdateManyWithoutBorrowerInput, {nullable:true})
    Contract?: ContractUpdateManyWithoutBorrowerInput;

    @Field(() => LocalUpdateManyWithoutBorrowerInput, {nullable:true})
    Local?: LocalUpdateManyWithoutBorrowerInput;
}
