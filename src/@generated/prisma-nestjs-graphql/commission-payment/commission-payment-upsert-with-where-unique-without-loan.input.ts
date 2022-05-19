import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentUpdateWithoutLoanInput } from './commission-payment-update-without-loan.input';
import { CommissionPaymentCreateWithoutLoanInput } from './commission-payment-create-without-loan.input';

@InputType()
export class CommissionPaymentUpsertWithWhereUniqueWithoutLoanInput {

    @Field(() => CommissionPaymentWhereUniqueInput, {nullable:false})
    where!: CommissionPaymentWhereUniqueInput;

    @Field(() => CommissionPaymentUpdateWithoutLoanInput, {nullable:false})
    update!: CommissionPaymentUpdateWithoutLoanInput;

    @Field(() => CommissionPaymentCreateWithoutLoanInput, {nullable:false})
    create!: CommissionPaymentCreateWithoutLoanInput;
}
