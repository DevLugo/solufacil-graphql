import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BorrowerUpdateOneWithoutPhonesInput } from '../borrower/borrower-update-one-without-phones.input';
import { EmployeeUpdateOneWithoutPhonesInput } from '../employee/employee-update-one-without-phones.input';
import { AvalUpdateOneWithoutPhonesInput } from '../aval/aval-update-one-without-phones.input';

@InputType()
export class PhoneUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    number?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BorrowerUpdateOneWithoutPhonesInput, {nullable:true})
    Borrower?: BorrowerUpdateOneWithoutPhonesInput;

    @Field(() => EmployeeUpdateOneWithoutPhonesInput, {nullable:true})
    Employee?: EmployeeUpdateOneWithoutPhonesInput;

    @Field(() => AvalUpdateOneWithoutPhonesInput, {nullable:true})
    aval?: AvalUpdateOneWithoutPhonesInput;
}
