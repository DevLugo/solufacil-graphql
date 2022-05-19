import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { LoanUncheckedUpdateManyWithoutLoanTypeInput } from '../loan/loan-unchecked-update-many-without-loan-type.input';
import { ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput } from '../comission-payment-configuration/comission-payment-configuration-unchecked-update-many-without-loan-type.input';

@InputType()
export class LoantypeUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    weekDuration?: IntFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    rate?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    overdueRate?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => LoanUncheckedUpdateManyWithoutLoanTypeInput, {nullable:true})
    Loan?: LoanUncheckedUpdateManyWithoutLoanTypeInput;

    @Field(() => ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput, {nullable:true})
    ComissionPaymentConfiguration?: ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput;
}
