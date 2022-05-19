import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentCreateWithoutPaymentScheduleInput } from './commission-payment-create-without-payment-schedule.input';
import { CommissionPaymentCreateOrConnectWithoutPaymentScheduleInput } from './commission-payment-create-or-connect-without-payment-schedule.input';
import { CommissionPaymentCreateManyPaymentScheduleInputEnvelope } from './commission-payment-create-many-payment-schedule-input-envelope.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';

@InputType()
export class CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput {

    @Field(() => [CommissionPaymentCreateWithoutPaymentScheduleInput], {nullable:true})
    create?: Array<CommissionPaymentCreateWithoutPaymentScheduleInput>;

    @Field(() => [CommissionPaymentCreateOrConnectWithoutPaymentScheduleInput], {nullable:true})
    connectOrCreate?: Array<CommissionPaymentCreateOrConnectWithoutPaymentScheduleInput>;

    @Field(() => CommissionPaymentCreateManyPaymentScheduleInputEnvelope, {nullable:true})
    createMany?: CommissionPaymentCreateManyPaymentScheduleInputEnvelope;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    connect?: Array<CommissionPaymentWhereUniqueInput>;
}
