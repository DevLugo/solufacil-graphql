import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DocumentUncheckedUpdateManyWithoutContractInput } from '../document/document-unchecked-update-many-without-contract.input';
import { LoanUncheckedUpdateManyWithoutContractInput } from '../loan/loan-unchecked-update-many-without-contract.input';

@InputType()
export class ContractUncheckedUpdateWithoutEmployerInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    borrowerId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DocumentUncheckedUpdateManyWithoutContractInput, {nullable:true})
    Documents?: DocumentUncheckedUpdateManyWithoutContractInput;

    @Field(() => LoanUncheckedUpdateManyWithoutContractInput, {nullable:true})
    Loans?: LoanUncheckedUpdateManyWithoutContractInput;
}
