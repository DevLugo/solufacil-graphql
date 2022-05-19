import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleCreateWithoutCommissionPaymentInput } from './payment-schedule-create-without-commission-payment.input';
import { PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput } from './payment-schedule-create-or-connect-without-commission-payment.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';

@InputType()
export class PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput {

    @Field(() => PaymentScheduleCreateWithoutCommissionPaymentInput, {nullable:true})
    create?: PaymentScheduleCreateWithoutCommissionPaymentInput;

    @Field(() => PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput, {nullable:true})
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput;

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:true})
    connect?: PaymentScheduleWhereUniqueInput;
}
