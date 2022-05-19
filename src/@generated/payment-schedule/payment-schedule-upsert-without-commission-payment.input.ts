import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleUpdateWithoutCommissionPaymentInput } from './payment-schedule-update-without-commission-payment.input';
import { PaymentScheduleCreateWithoutCommissionPaymentInput } from './payment-schedule-create-without-commission-payment.input';

@InputType()
export class PaymentScheduleUpsertWithoutCommissionPaymentInput {

    @Field(() => PaymentScheduleUpdateWithoutCommissionPaymentInput, {nullable:false})
    update!: PaymentScheduleUpdateWithoutCommissionPaymentInput;

    @Field(() => PaymentScheduleCreateWithoutCommissionPaymentInput, {nullable:false})
    create!: PaymentScheduleCreateWithoutCommissionPaymentInput;
}
