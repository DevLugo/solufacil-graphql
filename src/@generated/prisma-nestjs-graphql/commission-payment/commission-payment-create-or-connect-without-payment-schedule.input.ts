import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentCreateWithoutPaymentScheduleInput } from './commission-payment-create-without-payment-schedule.input';

@InputType()
export class CommissionPaymentCreateOrConnectWithoutPaymentScheduleInput {

    @Field(() => CommissionPaymentWhereUniqueInput, {nullable:false})
    where!: CommissionPaymentWhereUniqueInput;

    @Field(() => CommissionPaymentCreateWithoutPaymentScheduleInput, {nullable:false})
    create!: CommissionPaymentCreateWithoutPaymentScheduleInput;
}
