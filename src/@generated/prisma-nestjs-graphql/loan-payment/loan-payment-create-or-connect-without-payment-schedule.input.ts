import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentCreateWithoutPaymentScheduleInput } from './loan-payment-create-without-payment-schedule.input';

@InputType()
export class LoanPaymentCreateOrConnectWithoutPaymentScheduleInput {

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;

    @Field(() => LoanPaymentCreateWithoutPaymentScheduleInput, {nullable:false})
    create!: LoanPaymentCreateWithoutPaymentScheduleInput;
}
