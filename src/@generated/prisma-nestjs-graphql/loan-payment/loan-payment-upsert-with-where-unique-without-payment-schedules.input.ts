import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithoutPaymentSchedulesInput } from './loan-payment-update-without-payment-schedules.input';
import { LoanPaymentCreateWithoutPaymentSchedulesInput } from './loan-payment-create-without-payment-schedules.input';

@InputType()
export class LoanPaymentUpsertWithWhereUniqueWithoutPaymentSchedulesInput {

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;

    @Field(() => LoanPaymentUpdateWithoutPaymentSchedulesInput, {nullable:false})
    update!: LoanPaymentUpdateWithoutPaymentSchedulesInput;

    @Field(() => LoanPaymentCreateWithoutPaymentSchedulesInput, {nullable:false})
    create!: LoanPaymentCreateWithoutPaymentSchedulesInput;
}
