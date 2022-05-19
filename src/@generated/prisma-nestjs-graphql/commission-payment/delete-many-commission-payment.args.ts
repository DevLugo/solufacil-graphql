import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommissionPaymentWhereInput } from './commission-payment-where.input';

@ArgsType()
export class DeleteManyCommissionPaymentArgs {

    @Field(() => CommissionPaymentWhereInput, {nullable:true})
    where?: CommissionPaymentWhereInput;
}
