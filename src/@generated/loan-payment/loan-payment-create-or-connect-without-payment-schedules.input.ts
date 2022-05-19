import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentCreateWithoutPaymentSchedulesInput } from './loan-payment-create-without-payment-schedules.input';

@InputType()
export class LoanPaymentCreateOrConnectWithoutPaymentSchedulesInput {

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;

    @Field(() => LoanPaymentCreateWithoutPaymentSchedulesInput, {nullable:false})
    create!: LoanPaymentCreateWithoutPaymentSchedulesInput;
}
