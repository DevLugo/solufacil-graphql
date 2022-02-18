import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleCreateWithoutLoanInput } from './payment-schedule-create-without-loan.input';

@InputType()
export class PaymentScheduleCreateOrConnectWithoutLoanInput {

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:false})
    where!: PaymentScheduleWhereUniqueInput;

    @Field(() => PaymentScheduleCreateWithoutLoanInput, {nullable:false})
    create!: PaymentScheduleCreateWithoutLoanInput;
}
