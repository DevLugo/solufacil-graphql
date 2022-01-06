import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanPaymentWhereInput } from './loan-payment-where.input';

@ArgsType()
export class DeleteManyLoanPaymentArgs {

    @Field(() => LoanPaymentWhereInput, {nullable:true})
    where?: LoanPaymentWhereInput;
}
