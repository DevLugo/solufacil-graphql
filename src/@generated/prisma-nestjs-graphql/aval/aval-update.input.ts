import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PhoneUpdateManyWithoutAvalInput } from '../phone/phone-update-many-without-aval.input';
import { DocumentUpdateManyWithoutAvalInput } from '../document/document-update-many-without-aval.input';

@InputType()
export class AvalUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

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

    @Field(() => PhoneUpdateManyWithoutAvalInput, {nullable:true})
    phones?: PhoneUpdateManyWithoutAvalInput;

    @Field(() => DocumentUpdateManyWithoutAvalInput, {nullable:true})
    documents?: DocumentUpdateManyWithoutAvalInput;
}
