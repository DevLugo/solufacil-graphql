import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentCreateInput } from './commission-payment-create.input';
import { CommissionPaymentUpdateInput } from './commission-payment-update.input';

@ArgsType()
export class UpsertOneCommissionPaymentArgs {

    @Field(() => CommissionPaymentWhereUniqueInput, {nullable:false})
    where!: CommissionPaymentWhereUniqueInput;

    @Field(() => CommissionPaymentCreateInput, {nullable:false})
    create!: CommissionPaymentCreateInput;

    @Field(() => CommissionPaymentUpdateInput, {nullable:false})
    update!: CommissionPaymentUpdateInput;
}
