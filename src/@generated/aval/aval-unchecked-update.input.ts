import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PhoneUncheckedUpdateManyWithoutAvalInput } from '../phone/phone-unchecked-update-many-without-aval.input';
import { HideField } from '@nestjs/graphql';
import { DocumentUncheckedUpdateManyWithoutAvalInput } from '../document/document-unchecked-update-many-without-aval.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class AvalUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => PhoneUncheckedUpdateManyWithoutAvalInput, {nullable:true})
    phones?: PhoneUncheckedUpdateManyWithoutAvalInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @HideField()
    fullName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => DocumentUncheckedUpdateManyWithoutAvalInput, {nullable:true})
    documents?: DocumentUncheckedUpdateManyWithoutAvalInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
