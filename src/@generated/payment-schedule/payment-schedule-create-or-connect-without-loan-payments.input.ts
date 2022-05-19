import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleCreateWithoutLoanPaymentsInput } from './payment-schedule-create-without-loan-payments.input';

@InputType()
export class PaymentScheduleCreateOrConnectWithoutLoanPaymentsInput {

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:false})
    where!: PaymentScheduleWhereUniqueInput;

    @Field(() => PaymentScheduleCreateWithoutLoanPaymentsInput, {nullable:false})
    create!: PaymentScheduleCreateWithoutLoanPaymentsInput;
}
