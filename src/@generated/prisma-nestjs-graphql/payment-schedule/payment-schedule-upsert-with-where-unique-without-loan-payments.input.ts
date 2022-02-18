import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleUpdateWithoutLoanPaymentsInput } from './payment-schedule-update-without-loan-payments.input';
import { PaymentScheduleCreateWithoutLoanPaymentsInput } from './payment-schedule-create-without-loan-payments.input';

@InputType()
export class PaymentScheduleUpsertWithWhereUniqueWithoutLoanPaymentsInput {

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:false})
    where!: PaymentScheduleWhereUniqueInput;

    @Field(() => PaymentScheduleUpdateWithoutLoanPaymentsInput, {nullable:false})
    update!: PaymentScheduleUpdateWithoutLoanPaymentsInput;

    @Field(() => PaymentScheduleCreateWithoutLoanPaymentsInput, {nullable:false})
    create!: PaymentScheduleCreateWithoutLoanPaymentsInput;
}
