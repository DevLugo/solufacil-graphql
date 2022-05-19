import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleCreateWithoutCommissionPaymentInput } from './payment-schedule-create-without-commission-payment.input';
import { PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput } from './payment-schedule-create-or-connect-without-commission-payment.input';
import { PaymentScheduleUpsertWithoutCommissionPaymentInput } from './payment-schedule-upsert-without-commission-payment.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleUpdateWithoutCommissionPaymentInput } from './payment-schedule-update-without-commission-payment.input';

@InputType()
export class PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput {

    @Field(() => PaymentScheduleCreateWithoutCommissionPaymentInput, {nullable:true})
    create?: PaymentScheduleCreateWithoutCommissionPaymentInput;

    @Field(() => PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput, {nullable:true})
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput;

    @Field(() => PaymentScheduleUpsertWithoutCommissionPaymentInput, {nullable:true})
    upsert?: PaymentScheduleUpsertWithoutCommissionPaymentInput;

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:true})
    connect?: PaymentScheduleWhereUniqueInput;

    @Field(() => PaymentScheduleUpdateWithoutCommissionPaymentInput, {nullable:true})
    update?: PaymentScheduleUpdateWithoutCommissionPaymentInput;
}
