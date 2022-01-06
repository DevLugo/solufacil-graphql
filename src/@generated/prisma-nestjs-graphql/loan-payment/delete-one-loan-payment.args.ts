import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';

@ArgsType()
export class DeleteOneLoanPaymentArgs {

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:false})
    where!: LoanPaymentWhereUniqueInput;
}
