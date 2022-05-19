import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EmployeeUpdateOneWithoutPhonesInput } from '../employee/employee-update-one-without-phones.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AvalUpdateOneWithoutPhonesInput } from '../aval/aval-update-one-without-phones.input';

@InputType()
export class PhoneUpdateWithoutBorrowerInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    number?: StringFieldUpdateOperationsInput;

    @HideField()
    Employee?: EmployeeUpdateOneWithoutPhonesInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AvalUpdateOneWithoutPhonesInput, {nullable:true})
    aval?: AvalUpdateOneWithoutPhonesInput;
}
