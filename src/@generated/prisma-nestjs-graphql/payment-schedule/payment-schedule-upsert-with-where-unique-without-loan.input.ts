import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleUpdateWithoutLoanInput } from './payment-schedule-update-without-loan.input';
import { PaymentScheduleCreateWithoutLoanInput } from './payment-schedule-create-without-loan.input';

@InputType()
export class PaymentScheduleUpsertWithWhereUniqueWithoutLoanInput {

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:false})
    where!: PaymentScheduleWhereUniqueInput;

    @Field(() => PaymentScheduleUpdateWithoutLoanInput, {nullable:false})
    update!: PaymentScheduleUpdateWithoutLoanInput;

    @Field(() => PaymentScheduleCreateWithoutLoanInput, {nullable:false})
    create!: PaymentScheduleCreateWithoutLoanInput;
}
