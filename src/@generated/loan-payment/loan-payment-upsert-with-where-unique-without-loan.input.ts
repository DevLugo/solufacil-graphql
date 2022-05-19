import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithoutLoanInput } from './loan-payment-update-without-loan.input';
import { LoanPaymentCreateWithoutLoanInput } from './loan-payment-create-without-loan.input';

@InputType()
export class LoanPaymentUpsertWithWhereUniqueWithoutLoanInput {

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;

    @Field(() => LoanPaymentUpdateWithoutLoanInput, {nullable:false})
    update!: LoanPaymentUpdateWithoutLoanInput;

    @Field(() => LoanPaymentCreateWithoutLoanInput, {nullable:false})
    create!: LoanPaymentCreateWithoutLoanInput;
}
