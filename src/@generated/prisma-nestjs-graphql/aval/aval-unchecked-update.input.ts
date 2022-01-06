import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PhoneUncheckedUpdateManyWithoutAvalInput } from '../phone/phone-unchecked-update-many-without-aval.input';
import { DocumentUncheckedUpdateManyWithoutAvalInput } from '../document/document-unchecked-update-many-without-aval.input';

@InputType()
export class AvalUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

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

    @Field(() => PhoneUncheckedUpdateManyWithoutAvalInput, {nullable:true})
    phones?: PhoneUncheckedUpdateManyWithoutAvalInput;

    @Field(() => DocumentUncheckedUpdateManyWithoutAvalInput, {nullable:true})
    documents?: DocumentUncheckedUpdateManyWithoutAvalInput;
}
