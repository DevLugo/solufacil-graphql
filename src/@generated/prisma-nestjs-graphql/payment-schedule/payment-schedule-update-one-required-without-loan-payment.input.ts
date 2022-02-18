import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleCreateWithoutLoanPaymentInput } from './payment-schedule-create-without-loan-payment.input';
import { PaymentScheduleCreateOrConnectWithoutLoanPaymentInput } from './payment-schedule-create-or-connect-without-loan-payment.input';
import { PaymentScheduleUpsertWithoutLoanPaymentInput } from './payment-schedule-upsert-without-loan-payment.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleUpdateWithoutLoanPaymentInput } from './payment-schedule-update-without-loan-payment.input';

@InputType()
export class PaymentScheduleUpdateOneRequiredWithoutLoanPaymentInput {

    @Field(() => PaymentScheduleCreateWithoutLoanPaymentInput, {nullable:true})
    create?: PaymentScheduleCreateWithoutLoanPaymentInput;

    @Field(() => PaymentScheduleCreateOrConnectWithoutLoanPaymentInput, {nullable:true})
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutLoanPaymentInput;

    @Field(() => PaymentScheduleUpsertWithoutLoanPaymentInput, {nullable:true})
    upsert?: PaymentScheduleUpsertWithoutLoanPaymentInput;

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:true})
    connect?: PaymentScheduleWhereUniqueInput;

    @Field(() => PaymentScheduleUpdateWithoutLoanPaymentInput, {nullable:true})
    update?: PaymentScheduleUpdateWithoutLoanPaymentInput;
}
