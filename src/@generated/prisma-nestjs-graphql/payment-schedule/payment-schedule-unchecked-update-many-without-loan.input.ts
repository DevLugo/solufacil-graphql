import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleCreateWithoutLoanInput } from './payment-schedule-create-without-loan.input';
import { PaymentScheduleCreateOrConnectWithoutLoanInput } from './payment-schedule-create-or-connect-without-loan.input';
import { PaymentScheduleUpsertWithWhereUniqueWithoutLoanInput } from './payment-schedule-upsert-with-where-unique-without-loan.input';
import { PaymentScheduleCreateManyLoanInputEnvelope } from './payment-schedule-create-many-loan-input-envelope.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleUpdateWithWhereUniqueWithoutLoanInput } from './payment-schedule-update-with-where-unique-without-loan.input';
import { PaymentScheduleUpdateManyWithWhereWithoutLoanInput } from './payment-schedule-update-many-with-where-without-loan.input';
import { PaymentScheduleScalarWhereInput } from './payment-schedule-scalar-where.input';

@InputType()
export class PaymentScheduleUncheckedUpdateManyWithoutLoanInput {

    @Field(() => [PaymentScheduleCreateWithoutLoanInput], {nullable:true})
    create?: Array<PaymentScheduleCreateWithoutLoanInput>;

    @Field(() => [PaymentScheduleCreateOrConnectWithoutLoanInput], {nullable:true})
    connectOrCreate?: Array<PaymentScheduleCreateOrConnectWithoutLoanInput>;

    @Field(() => [PaymentScheduleUpsertWithWhereUniqueWithoutLoanInput], {nullable:true})
    upsert?: Array<PaymentScheduleUpsertWithWhereUniqueWithoutLoanInput>;

    @Field(() => PaymentScheduleCreateManyLoanInputEnvelope, {nullable:true})
    createMany?: PaymentScheduleCreateManyLoanInputEnvelope;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    set?: Array<PaymentScheduleWhereUniqueInput>;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    disconnect?: Array<PaymentScheduleWhereUniqueInput>;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    delete?: Array<PaymentScheduleWhereUniqueInput>;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    connect?: Array<PaymentScheduleWhereUniqueInput>;

    @Field(() => [PaymentScheduleUpdateWithWhereUniqueWithoutLoanInput], {nullable:true})
    update?: Array<PaymentScheduleUpdateWithWhereUniqueWithoutLoanInput>;

    @Field(() => [PaymentScheduleUpdateManyWithWhereWithoutLoanInput], {nullable:true})
    updateMany?: Array<PaymentScheduleUpdateManyWithWhereWithoutLoanInput>;

    @Field(() => [PaymentScheduleScalarWhereInput], {nullable:true})
    deleteMany?: Array<PaymentScheduleScalarWhereInput>;
}
