import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanUpdateWithoutCommissionPaymentInput } from './loan-update-without-commission-payment.input';
import { LoanCreateWithoutCommissionPaymentInput } from './loan-create-without-commission-payment.input';

@InputType()
export class LoanUpsertWithoutCommissionPaymentInput {

    @Field(() => LoanUpdateWithoutCommissionPaymentInput, {nullable:false})
    update!: LoanUpdateWithoutCommissionPaymentInput;

    @Field(() => LoanCreateWithoutCommissionPaymentInput, {nullable:false})
    create!: LoanCreateWithoutCommissionPaymentInput;
}
