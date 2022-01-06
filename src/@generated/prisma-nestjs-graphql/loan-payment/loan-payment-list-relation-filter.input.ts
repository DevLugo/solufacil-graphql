import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentWhereInput } from './loan-payment-where.input';

@InputType()
export class LoanPaymentListRelationFilter {

    @Field(() => LoanPaymentWhereInput, {nullable:true})
    every?: LoanPaymentWhereInput;

    @Field(() => LoanPaymentWhereInput, {nullable:true})
    some?: LoanPaymentWhereInput;

    @Field(() => LoanPaymentWhereInput, {nullable:true})
    none?: LoanPaymentWhereInput;
}
