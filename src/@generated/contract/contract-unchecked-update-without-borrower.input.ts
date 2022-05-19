import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DocumentUncheckedUpdateManyWithoutContractInput } from '../document/document-unchecked-update-many-without-contract.input';
import { LoanUncheckedUpdateManyWithoutContractInput } from '../loan/loan-unchecked-update-many-without-contract.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ContractUncheckedUpdateWithoutBorrowerInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DocumentUncheckedUpdateManyWithoutContractInput, {nullable:true})
    documents?: DocumentUncheckedUpdateManyWithoutContractInput;

    @HideField()
    loans?: LoanUncheckedUpdateManyWithoutContractInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dueDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    signDate?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    contractTypeId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    loanLeadId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    employeeId?: StringFieldUpdateOperationsInput;
}
