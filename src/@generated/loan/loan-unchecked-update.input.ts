import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLoanStateFieldUpdateOperationsInput } from '../prisma/enum-loan-state-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { LoanPaymentUncheckedUpdateManyWithoutLoanInput } from '../loan-payment/loan-payment-unchecked-update-many-without-loan.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PaymentScheduleUncheckedUpdateManyWithoutLoanInput } from '../payment-schedule/payment-schedule-unchecked-update-many-without-loan.input';
import { CommissionPaymentUncheckedUpdateManyWithoutLoanInput } from '../commission-payment/commission-payment-unchecked-update-many-without-loan.input';

@InputType()
export class LoanUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @HideField()
    status?: EnumLoanStateFieldUpdateOperationsInput;

    @HideField()
    payments?: LoanPaymentUncheckedUpdateManyWithoutLoanInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    weeklyPaymentAmount?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    amountToPay?: DecimalFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    signDate?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    contractId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    loantypeId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    employeeId?: StringFieldUpdateOperationsInput;

    @Field(() => PaymentScheduleUncheckedUpdateManyWithoutLoanInput, {nullable:true})
    paymentSchedule?: PaymentScheduleUncheckedUpdateManyWithoutLoanInput;

    @Field(() => CommissionPaymentUncheckedUpdateManyWithoutLoanInput, {nullable:true})
    CommissionPayment?: CommissionPaymentUncheckedUpdateManyWithoutLoanInput;
}
