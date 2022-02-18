import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleCreateWithoutLoanPaymentInput } from './payment-schedule-create-without-loan-payment.input';

@InputType()
export class PaymentScheduleCreateOrConnectWithoutLoanPaymentInput {

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:false})
    where!: PaymentScheduleWhereUniqueInput;

    @Field(() => PaymentScheduleCreateWithoutLoanPaymentInput, {nullable:false})
    create!: PaymentScheduleCreateWithoutLoanPaymentInput;
}
