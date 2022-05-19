import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithoutPaymentSchedulesInput } from './loan-payment-update-without-payment-schedules.input';

@InputType()
export class LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput {

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;

    @Field(() => LoanPaymentUpdateWithoutPaymentSchedulesInput, {nullable:false})
    data!: LoanPaymentUpdateWithoutPaymentSchedulesInput;
}
