import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanCreateWithoutCommissionPaymentInput } from './loan-create-without-commission-payment.input';

@InputType()
export class LoanCreateOrConnectWithoutCommissionPaymentInput {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;

    @Field(() => LoanCreateWithoutCommissionPaymentInput, {nullable:false})
    create!: LoanCreateWithoutCommissionPaymentInput;
}
