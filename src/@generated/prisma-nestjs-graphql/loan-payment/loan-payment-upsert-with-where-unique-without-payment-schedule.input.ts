import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithoutPaymentScheduleInput } from './loan-payment-update-without-payment-schedule.input';
import { LoanPaymentCreateWithoutPaymentScheduleInput } from './loan-payment-create-without-payment-schedule.input';

@InputType()
export class LoanPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput {

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;

    @Field(() => LoanPaymentUpdateWithoutPaymentScheduleInput, {nullable:false})
    update!: LoanPaymentUpdateWithoutPaymentScheduleInput;

    @Field(() => LoanPaymentCreateWithoutPaymentScheduleInput, {nullable:false})
    create!: LoanPaymentCreateWithoutPaymentScheduleInput;
}
