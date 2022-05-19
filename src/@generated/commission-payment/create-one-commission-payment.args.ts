import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommissionPaymentCreateInput } from './commission-payment-create.input';

@ArgsType()
export class CreateOneCommissionPaymentArgs {

    @Field(() => CommissionPaymentCreateInput, {nullable:false})
    data!: CommissionPaymentCreateInput;
}
