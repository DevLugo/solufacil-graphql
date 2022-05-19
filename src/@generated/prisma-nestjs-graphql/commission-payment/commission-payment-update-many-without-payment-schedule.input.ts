import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentCreateWithoutPaymentScheduleInput } from './commission-payment-create-without-payment-schedule.input';
import { CommissionPaymentCreateOrConnectWithoutPaymentScheduleInput } from './commission-payment-create-or-connect-without-payment-schedule.input';
import { CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput } from './commission-payment-upsert-with-where-unique-without-payment-schedule.input';
import { CommissionPaymentCreateManyPaymentScheduleInputEnvelope } from './commission-payment-create-many-payment-schedule-input-envelope.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentUpdateWithWhereUniqueWithoutPaymentScheduleInput } from './commission-payment-update-with-where-unique-without-payment-schedule.input';
import { CommissionPaymentUpdateManyWithWhereWithoutPaymentScheduleInput } from './commission-payment-update-many-with-where-without-payment-schedule.input';
import { CommissionPaymentScalarWhereInput } from './commission-payment-scalar-where.input';

@InputType()
export class CommissionPaymentUpdateManyWithoutPaymentScheduleInput {

    @Field(() => [CommissionPaymentCreateWithoutPaymentScheduleInput], {nullable:true})
    create?: Array<CommissionPaymentCreateWithoutPaymentScheduleInput>;

    @Field(() => [CommissionPaymentCreateOrConnectWithoutPaymentScheduleInput], {nullable:true})
    connectOrCreate?: Array<CommissionPaymentCreateOrConnectWithoutPaymentScheduleInput>;

    @Field(() => [CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput], {nullable:true})
    upsert?: Array<CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput>;

    @Field(() => CommissionPaymentCreateManyPaymentScheduleInputEnvelope, {nullable:true})
    createMany?: CommissionPaymentCreateManyPaymentScheduleInputEnvelope;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    set?: Array<CommissionPaymentWhereUniqueInput>;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CommissionPaymentWhereUniqueInput>;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    delete?: Array<CommissionPaymentWhereUniqueInput>;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    connect?: Array<CommissionPaymentWhereUniqueInput>;

    @Field(() => [CommissionPaymentUpdateWithWhereUniqueWithoutPaymentScheduleInput], {nullable:true})
    update?: Array<CommissionPaymentUpdateWithWhereUniqueWithoutPaymentScheduleInput>;

    @Field(() => [CommissionPaymentUpdateManyWithWhereWithoutPaymentScheduleInput], {nullable:true})
    updateMany?: Array<CommissionPaymentUpdateManyWithWhereWithoutPaymentScheduleInput>;

    @Field(() => [CommissionPaymentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CommissionPaymentScalarWhereInput>;
}
