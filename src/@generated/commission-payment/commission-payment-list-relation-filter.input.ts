import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentWhereInput } from './commission-payment-where.input';

@InputType()
export class CommissionPaymentListRelationFilter {

    @Field(() => CommissionPaymentWhereInput, {nullable:true})
    every?: CommissionPaymentWhereInput;

    @Field(() => CommissionPaymentWhereInput, {nullable:true})
    some?: CommissionPaymentWhereInput;

    @Field(() => CommissionPaymentWhereInput, {nullable:true})
    none?: CommissionPaymentWhereInput;
}
