import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleUpdateWithoutLoanPaymentInput } from './payment-schedule-update-without-loan-payment.input';
import { PaymentScheduleCreateWithoutLoanPaymentInput } from './payment-schedule-create-without-loan-payment.input';

@InputType()
export class PaymentScheduleUpsertWithWhereUniqueWithoutLoanPaymentInput {

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:false})
    where!: PaymentScheduleWhereUniqueInput;

    @Field(() => PaymentScheduleUpdateWithoutLoanPaymentInput, {nullable:false})
    update!: PaymentScheduleUpdateWithoutLoanPaymentInput;

    @Field(() => PaymentScheduleCreateWithoutLoanPaymentInput, {nullable:false})
    create!: PaymentScheduleCreateWithoutLoanPaymentInput;
}
