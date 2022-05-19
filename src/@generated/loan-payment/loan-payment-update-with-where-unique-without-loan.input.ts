import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithoutLoanInput } from './loan-payment-update-without-loan.input';

@InputType()
export class LoanPaymentUpdateWithWhereUniqueWithoutLoanInput {

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;

    @Field(() => LoanPaymentUpdateWithoutLoanInput, {nullable:false})
    data!: LoanPaymentUpdateWithoutLoanInput;
}
