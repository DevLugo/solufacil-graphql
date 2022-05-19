import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateWithoutCommissionPaymentInput } from './loan-create-without-commission-payment.input';
import { LoanCreateOrConnectWithoutCommissionPaymentInput } from './loan-create-or-connect-without-commission-payment.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';

@InputType()
export class LoanCreateNestedOneWithoutCommissionPaymentInput {

    @Field(() => LoanCreateWithoutCommissionPaymentInput, {nullable:true})
    create?: LoanCreateWithoutCommissionPaymentInput;

    @Field(() => LoanCreateOrConnectWithoutCommissionPaymentInput, {nullable:true})
    connectOrCreate?: LoanCreateOrConnectWithoutCommissionPaymentInput;

    @Field(() => LoanWhereUniqueInput, {nullable:true})
    connect?: LoanWhereUniqueInput;
}
