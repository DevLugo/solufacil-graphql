import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentUpdateWithoutPaymentScheduleInput } from './commission-payment-update-without-payment-schedule.input';
import { CommissionPaymentCreateWithoutPaymentScheduleInput } from './commission-payment-create-without-payment-schedule.input';

@InputType()
export class CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput {

    @Field(() => CommissionPaymentWhereUniqueInput, {nullable:false})
    where!: CommissionPaymentWhereUniqueInput;

    @Field(() => CommissionPaymentUpdateWithoutPaymentScheduleInput, {nullable:false})
    update!: CommissionPaymentUpdateWithoutPaymentScheduleInput;

    @Field(() => CommissionPaymentCreateWithoutPaymentScheduleInput, {nullable:false})
    create!: CommissionPaymentCreateWithoutPaymentScheduleInput;
}
