import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleUpdateWithoutLoanPaymentsInput } from './payment-schedule-update-without-loan-payments.input';

@InputType()
export class PaymentScheduleUpdateWithWhereUniqueWithoutLoanPaymentsInput {

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:false})
    where!: PaymentScheduleWhereUniqueInput;

    @Field(() => PaymentScheduleUpdateWithoutLoanPaymentsInput, {nullable:false})
    data!: PaymentScheduleUpdateWithoutLoanPaymentsInput;
}
