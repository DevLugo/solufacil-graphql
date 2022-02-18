import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithoutPaymentScheduleInput } from './loan-payment-update-without-payment-schedule.input';

@InputType()
export class LoanPaymentUpdateWithWhereUniqueWithoutPaymentScheduleInput {

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;

    @Field(() => LoanPaymentUpdateWithoutPaymentScheduleInput, {nullable:false})
    data!: LoanPaymentUpdateWithoutPaymentScheduleInput;
}
