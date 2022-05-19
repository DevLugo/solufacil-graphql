import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleCreateWithoutCommissionPaymentInput } from './payment-schedule-create-without-commission-payment.input';

@InputType()
export class PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput {

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:false})
    where!: PaymentScheduleWhereUniqueInput;

    @Field(() => PaymentScheduleCreateWithoutCommissionPaymentInput, {nullable:false})
    create!: PaymentScheduleCreateWithoutCommissionPaymentInput;
}
