import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentCreateWithoutLoanInput } from './loan-payment-create-without-loan.input';
import { LoanPaymentCreateOrConnectWithoutLoanInput } from './loan-payment-create-or-connect-without-loan.input';
import { LoanPaymentCreateManyLoanInputEnvelope } from './loan-payment-create-many-loan-input-envelope.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';

@InputType()
export class LoanPaymentUncheckedCreateNestedManyWithoutLoanInput {

    @Field(() => [LoanPaymentCreateWithoutLoanInput], {nullable:true})
    create?: Array<LoanPaymentCreateWithoutLoanInput>;

    @Field(() => [LoanPaymentCreateOrConnectWithoutLoanInput], {nullable:true})
    connectOrCreate?: Array<LoanPaymentCreateOrConnectWithoutLoanInput>;

    @Field(() => LoanPaymentCreateManyLoanInputEnvelope, {nullable:true})
    createMany?: LoanPaymentCreateManyLoanInputEnvelope;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    connect?: Array<LoanPaymentWhereUniqueInput>;
}
