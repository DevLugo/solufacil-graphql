import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommissionPaymentUpdateManyMutationInput } from './commission-payment-update-many-mutation.input';
import { CommissionPaymentWhereInput } from './commission-payment-where.input';

@ArgsType()
export class UpdateManyCommissionPaymentArgs {

    @Field(() => CommissionPaymentUpdateManyMutationInput, {nullable:false})
    data!: CommissionPaymentUpdateManyMutationInput;

    @Field(() => CommissionPaymentWhereInput, {nullable:true})
    where?: CommissionPaymentWhereInput;
}
