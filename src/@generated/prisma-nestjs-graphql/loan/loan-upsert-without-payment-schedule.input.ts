import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanUpdateWithoutPaymentScheduleInput } from './loan-update-without-payment-schedule.input';
import { LoanCreateWithoutPaymentScheduleInput } from './loan-create-without-payment-schedule.input';

@InputType()
export class LoanUpsertWithoutPaymentScheduleInput {

    @Field(() => LoanUpdateWithoutPaymentScheduleInput, {nullable:false})
    update!: LoanUpdateWithoutPaymentScheduleInput;

    @Field(() => LoanCreateWithoutPaymentScheduleInput, {nullable:false})
    create!: LoanCreateWithoutPaymentScheduleInput;
}
