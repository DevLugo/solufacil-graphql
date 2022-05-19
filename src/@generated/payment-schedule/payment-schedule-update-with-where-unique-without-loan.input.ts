import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleUpdateWithoutLoanInput } from './payment-schedule-update-without-loan.input';

@InputType()
export class PaymentScheduleUpdateWithWhereUniqueWithoutLoanInput {

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:false})
    where!: PaymentScheduleWhereUniqueInput;

    @Field(() => PaymentScheduleUpdateWithoutLoanInput, {nullable:false})
    data!: PaymentScheduleUpdateWithoutLoanInput;
}
