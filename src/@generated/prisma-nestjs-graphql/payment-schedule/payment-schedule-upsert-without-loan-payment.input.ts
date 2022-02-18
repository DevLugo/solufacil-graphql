import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleUpdateWithoutLoanPaymentInput } from './payment-schedule-update-without-loan-payment.input';
import { PaymentScheduleCreateWithoutLoanPaymentInput } from './payment-schedule-create-without-loan-payment.input';

@InputType()
export class PaymentScheduleUpsertWithoutLoanPaymentInput {

    @Field(() => PaymentScheduleUpdateWithoutLoanPaymentInput, {nullable:false})
    update!: PaymentScheduleUpdateWithoutLoanPaymentInput;

    @Field(() => PaymentScheduleCreateWithoutLoanPaymentInput, {nullable:false})
    create!: PaymentScheduleCreateWithoutLoanPaymentInput;
}
