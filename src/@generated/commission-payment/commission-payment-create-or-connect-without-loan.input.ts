import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentCreateWithoutLoanInput } from './commission-payment-create-without-loan.input';

@InputType()
export class CommissionPaymentCreateOrConnectWithoutLoanInput {

    @Field(() => CommissionPaymentWhereUniqueInput, {nullable:false})
    where!: CommissionPaymentWhereUniqueInput;

    @Field(() => CommissionPaymentCreateWithoutLoanInput, {nullable:false})
    create!: CommissionPaymentCreateWithoutLoanInput;
}
