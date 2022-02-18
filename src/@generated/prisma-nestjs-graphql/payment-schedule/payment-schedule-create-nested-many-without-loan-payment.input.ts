import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleCreateWithoutLoanPaymentInput } from './payment-schedule-create-without-loan-payment.input';
import { PaymentScheduleCreateOrConnectWithoutLoanPaymentInput } from './payment-schedule-create-or-connect-without-loan-payment.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';

@InputType()
export class PaymentScheduleCreateNestedManyWithoutLoanPaymentInput {

    @Field(() => [PaymentScheduleCreateWithoutLoanPaymentInput], {nullable:true})
    create?: Array<PaymentScheduleCreateWithoutLoanPaymentInput>;

    @Field(() => [PaymentScheduleCreateOrConnectWithoutLoanPaymentInput], {nullable:true})
    connectOrCreate?: Array<PaymentScheduleCreateOrConnectWithoutLoanPaymentInput>;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    connect?: Array<PaymentScheduleWhereUniqueInput>;
}
