import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateWithoutCommissionPaymentInput } from './loan-create-without-commission-payment.input';
import { LoanCreateOrConnectWithoutCommissionPaymentInput } from './loan-create-or-connect-without-commission-payment.input';
import { LoanUpsertWithoutCommissionPaymentInput } from './loan-upsert-without-commission-payment.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithoutCommissionPaymentInput } from './loan-update-without-commission-payment.input';

@InputType()
export class LoanUpdateOneWithoutCommissionPaymentInput {

    @Field(() => LoanCreateWithoutCommissionPaymentInput, {nullable:true})
    create?: LoanCreateWithoutCommissionPaymentInput;

    @Field(() => LoanCreateOrConnectWithoutCommissionPaymentInput, {nullable:true})
    connectOrCreate?: LoanCreateOrConnectWithoutCommissionPaymentInput;

    @Field(() => LoanUpsertWithoutCommissionPaymentInput, {nullable:true})
    upsert?: LoanUpsertWithoutCommissionPaymentInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => LoanWhereUniqueInput, {nullable:true})
    connect?: LoanWhereUniqueInput;

    @Field(() => LoanUpdateWithoutCommissionPaymentInput, {nullable:true})
    update?: LoanUpdateWithoutCommissionPaymentInput;
}
