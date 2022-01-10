import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { BorrowerUpdateOneWithoutPhonesInput } from '../borrower/borrower-update-one-without-phones.input';
import { AvalUpdateOneWithoutPhonesInput } from '../aval/aval-update-one-without-phones.input';

@InputType()
export class PhoneUpdateWithoutEmployeeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    number?: StringFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BorrowerUpdateOneWithoutPhonesInput, {nullable:true})
    Borrower?: BorrowerUpdateOneWithoutPhonesInput;

    @Field(() => AvalUpdateOneWithoutPhonesInput, {nullable:true})
    aval?: AvalUpdateOneWithoutPhonesInput;
}
