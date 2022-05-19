import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput } from '../payment-schedule/payment-schedule-update-one-required-without-commission-payment.input';
import { LoanUpdateOneWithoutCommissionPaymentInput } from '../loan/loan-update-one-without-commission-payment.input';
import { EnumCommissionPaymentStatusFieldUpdateOperationsInput } from '../prisma/enum-commission-payment-status-field-update-operations.input';

@InputType()
export class CommissionPaymentUpdateWithoutEmployeeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    amount?: DecimalFieldUpdateOperationsInput;

    @Field(() => PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput, {nullable:true})
    paymentSchedule?: PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput;

    @Field(() => LoanUpdateOneWithoutCommissionPaymentInput, {nullable:true})
    loan?: LoanUpdateOneWithoutCommissionPaymentInput;

    @Field(() => EnumCommissionPaymentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumCommissionPaymentStatusFieldUpdateOperationsInput;
}
