import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleCreateWithoutLoanPaymentsInput } from './payment-schedule-create-without-loan-payments.input';
import { PaymentScheduleCreateOrConnectWithoutLoanPaymentsInput } from './payment-schedule-create-or-connect-without-loan-payments.input';
import { PaymentScheduleUpsertWithWhereUniqueWithoutLoanPaymentsInput } from './payment-schedule-upsert-with-where-unique-without-loan-payments.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleUpdateWithWhereUniqueWithoutLoanPaymentsInput } from './payment-schedule-update-with-where-unique-without-loan-payments.input';
import { PaymentScheduleUpdateManyWithWhereWithoutLoanPaymentsInput } from './payment-schedule-update-many-with-where-without-loan-payments.input';
import { PaymentScheduleScalarWhereInput } from './payment-schedule-scalar-where.input';

@InputType()
export class PaymentScheduleUpdateManyWithoutLoanPaymentsInput {

    @Field(() => [PaymentScheduleCreateWithoutLoanPaymentsInput], {nullable:true})
    create?: Array<PaymentScheduleCreateWithoutLoanPaymentsInput>;

    @Field(() => [PaymentScheduleCreateOrConnectWithoutLoanPaymentsInput], {nullable:true})
    connectOrCreate?: Array<PaymentScheduleCreateOrConnectWithoutLoanPaymentsInput>;

    @Field(() => [PaymentScheduleUpsertWithWhereUniqueWithoutLoanPaymentsInput], {nullable:true})
    upsert?: Array<PaymentScheduleUpsertWithWhereUniqueWithoutLoanPaymentsInput>;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    set?: Array<PaymentScheduleWhereUniqueInput>;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    disconnect?: Array<PaymentScheduleWhereUniqueInput>;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    delete?: Array<PaymentScheduleWhereUniqueInput>;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    connect?: Array<PaymentScheduleWhereUniqueInput>;

    @Field(() => [PaymentScheduleUpdateWithWhereUniqueWithoutLoanPaymentsInput], {nullable:true})
    update?: Array<PaymentScheduleUpdateWithWhereUniqueWithoutLoanPaymentsInput>;

    @Field(() => [PaymentScheduleUpdateManyWithWhereWithoutLoanPaymentsInput], {nullable:true})
    updateMany?: Array<PaymentScheduleUpdateManyWithWhereWithoutLoanPaymentsInput>;

    @Field(() => [PaymentScheduleScalarWhereInput], {nullable:true})
    deleteMany?: Array<PaymentScheduleScalarWhereInput>;
}
