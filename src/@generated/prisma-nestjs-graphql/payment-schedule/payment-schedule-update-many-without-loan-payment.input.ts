import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleCreateWithoutLoanPaymentInput } from './payment-schedule-create-without-loan-payment.input';
import { PaymentScheduleCreateOrConnectWithoutLoanPaymentInput } from './payment-schedule-create-or-connect-without-loan-payment.input';
import { PaymentScheduleUpsertWithWhereUniqueWithoutLoanPaymentInput } from './payment-schedule-upsert-with-where-unique-without-loan-payment.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleUpdateWithWhereUniqueWithoutLoanPaymentInput } from './payment-schedule-update-with-where-unique-without-loan-payment.input';
import { PaymentScheduleUpdateManyWithWhereWithoutLoanPaymentInput } from './payment-schedule-update-many-with-where-without-loan-payment.input';
import { PaymentScheduleScalarWhereInput } from './payment-schedule-scalar-where.input';

@InputType()
export class PaymentScheduleUpdateManyWithoutLoanPaymentInput {

    @Field(() => [PaymentScheduleCreateWithoutLoanPaymentInput], {nullable:true})
    create?: Array<PaymentScheduleCreateWithoutLoanPaymentInput>;

    @Field(() => [PaymentScheduleCreateOrConnectWithoutLoanPaymentInput], {nullable:true})
    connectOrCreate?: Array<PaymentScheduleCreateOrConnectWithoutLoanPaymentInput>;

    @Field(() => [PaymentScheduleUpsertWithWhereUniqueWithoutLoanPaymentInput], {nullable:true})
    upsert?: Array<PaymentScheduleUpsertWithWhereUniqueWithoutLoanPaymentInput>;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    set?: Array<PaymentScheduleWhereUniqueInput>;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    disconnect?: Array<PaymentScheduleWhereUniqueInput>;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    delete?: Array<PaymentScheduleWhereUniqueInput>;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    connect?: Array<PaymentScheduleWhereUniqueInput>;

    @Field(() => [PaymentScheduleUpdateWithWhereUniqueWithoutLoanPaymentInput], {nullable:true})
    update?: Array<PaymentScheduleUpdateWithWhereUniqueWithoutLoanPaymentInput>;

    @Field(() => [PaymentScheduleUpdateManyWithWhereWithoutLoanPaymentInput], {nullable:true})
    updateMany?: Array<PaymentScheduleUpdateManyWithWhereWithoutLoanPaymentInput>;

    @Field(() => [PaymentScheduleScalarWhereInput], {nullable:true})
    deleteMany?: Array<PaymentScheduleScalarWhereInput>;
}
