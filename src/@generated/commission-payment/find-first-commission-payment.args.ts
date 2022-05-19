import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommissionPaymentWhereInput } from './commission-payment-where.input';
import { CommissionPaymentOrderByWithRelationInput } from './commission-payment-order-by-with-relation.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommissionPaymentScalarFieldEnum } from './commission-payment-scalar-field.enum';

@ArgsType()
export class FindFirstCommissionPaymentArgs {

    @Field(() => CommissionPaymentWhereInput, {nullable:true})
    where?: CommissionPaymentWhereInput;

    @Field(() => [CommissionPaymentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommissionPaymentOrderByWithRelationInput>;

    @Field(() => CommissionPaymentWhereUniqueInput, {nullable:true})
    cursor?: CommissionPaymentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CommissionPaymentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommissionPaymentScalarFieldEnum>;
}
