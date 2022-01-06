import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanPaymentUpdateInput } from './loan-payment-update.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';

@ArgsType()
export class UpdateOneLoanPaymentArgs {

    @Field(() => LoanPaymentUpdateInput, {nullable:false})
    data!: LoanPaymentUpdateInput;

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;
}
