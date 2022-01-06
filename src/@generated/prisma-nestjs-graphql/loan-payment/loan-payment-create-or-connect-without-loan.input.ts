import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentCreateWithoutLoanInput } from './loan-payment-create-without-loan.input';

@InputType()
export class LoanPaymentCreateOrConnectWithoutLoanInput {

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;

    @Field(() => LoanPaymentCreateWithoutLoanInput, {nullable:false})
    create!: LoanPaymentCreateWithoutLoanInput;
}
