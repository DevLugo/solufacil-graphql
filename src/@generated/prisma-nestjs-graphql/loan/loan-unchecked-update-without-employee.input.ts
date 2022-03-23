import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLoanStateFieldUpdateOperationsInput } from '../prisma/enum-loan-state-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { LoanPaymentUncheckedUpdateManyWithoutLoanInput } from '../loan-payment/loan-payment-unchecked-update-many-without-loan.input';
import { PaymentScheduleUncheckedUpdateManyWithoutLoanInput } from '../payment-schedule/payment-schedule-unchecked-update-many-without-loan.input';

@InputType()
export class LoanUncheckedUpdateWithoutEmployeeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @HideField()
    status?: EnumLoanStateFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    weeklyPaymentAmount?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    amountToPay?: DecimalFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    contractId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    loantypeId?: StringFieldUpdateOperationsInput;

    @HideField()
    payments?: LoanPaymentUncheckedUpdateManyWithoutLoanInput;

    @Field(() => PaymentScheduleUncheckedUpdateManyWithoutLoanInput, {nullable:true})
    paymentSchedule?: PaymentScheduleUncheckedUpdateManyWithoutLoanInput;
}