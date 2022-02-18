import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleUpdateWithoutLoanPaymentInput } from './payment-schedule-update-without-loan-payment.input';

@InputType()
export class PaymentScheduleUpdateWithWhereUniqueWithoutLoanPaymentInput {

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:false})
    where!: PaymentScheduleWhereUniqueInput;

    @Field(() => PaymentScheduleUpdateWithoutLoanPaymentInput, {nullable:false})
    data!: PaymentScheduleUpdateWithoutLoanPaymentInput;
}
