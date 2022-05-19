import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentUpdateWithoutLoanInput } from './commission-payment-update-without-loan.input';

@InputType()
export class CommissionPaymentUpdateWithWhereUniqueWithoutLoanInput {

    @Field(() => CommissionPaymentWhereUniqueInput, {nullable:false})
    where!: CommissionPaymentWhereUniqueInput;

    @Field(() => CommissionPaymentUpdateWithoutLoanInput, {nullable:false})
    data!: CommissionPaymentUpdateWithoutLoanInput;
}
