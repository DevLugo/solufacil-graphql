import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommissionPaymentUpdateInput } from './commission-payment-update.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';

@ArgsType()
export class UpdateOneCommissionPaymentArgs {

    @Field(() => CommissionPaymentUpdateInput, {nullable:false})
    data!: CommissionPaymentUpdateInput;

    @Field(() => CommissionPaymentWhereUniqueInput, {nullable:false})
    where!: CommissionPaymentWhereUniqueInput;
}
