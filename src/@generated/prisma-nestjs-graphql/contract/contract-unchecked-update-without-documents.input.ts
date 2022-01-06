import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { Prisma } from '@prisma/client';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { LoanUncheckedUpdateManyWithoutContractInput } from '../loan/loan-unchecked-update-many-without-contract.input';

@InputType()
export class ContractUncheckedUpdateWithoutDocumentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    amount?: Prisma.Decimal;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    borrowerId?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    employeeId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => LoanUncheckedUpdateManyWithoutContractInput, {nullable:true})
    Loans?: LoanUncheckedUpdateManyWithoutContractInput;
}
