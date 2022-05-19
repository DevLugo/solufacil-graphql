import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentUpdateWithoutPaymentScheduleInput } from './commission-payment-update-without-payment-schedule.input';

@InputType()
export class CommissionPaymentUpdateWithWhereUniqueWithoutPaymentScheduleInput {

    @Field(() => CommissionPaymentWhereUniqueInput, {nullable:false})
    where!: CommissionPaymentWhereUniqueInput;

    @Field(() => CommissionPaymentUpdateWithoutPaymentScheduleInput, {nullable:false})
    data!: CommissionPaymentUpdateWithoutPaymentScheduleInput;
}
