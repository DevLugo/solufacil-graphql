import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentCreateWithoutLoanInput } from './loan-payment-create-without-loan.input';
import { LoanPaymentCreateOrConnectWithoutLoanInput } from './loan-payment-create-or-connect-without-loan.input';
import { LoanPaymentUpsertWithWhereUniqueWithoutLoanInput } from './loan-payment-upsert-with-where-unique-without-loan.input';
import { LoanPaymentCreateManyLoanInputEnvelope } from './loan-payment-create-many-loan-input-envelope.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithWhereUniqueWithoutLoanInput } from './loan-payment-update-with-where-unique-without-loan.input';
import { LoanPaymentUpdateManyWithWhereWithoutLoanInput } from './loan-payment-update-many-with-where-without-loan.input';
import { LoanPaymentScalarWhereInput } from './loan-payment-scalar-where.input';

@InputType()
export class LoanPaymentUpdateManyWithoutLoanInput {

    @Field(() => [LoanPaymentCreateWithoutLoanInput], {nullable:true})
    create?: Array<LoanPaymentCreateWithoutLoanInput>;

    @Field(() => [LoanPaymentCreateOrConnectWithoutLoanInput], {nullable:true})
    connectOrCreate?: Array<LoanPaymentCreateOrConnectWithoutLoanInput>;

    @Field(() => [LoanPaymentUpsertWithWhereUniqueWithoutLoanInput], {nullable:true})
    upsert?: Array<LoanPaymentUpsertWithWhereUniqueWithoutLoanInput>;

    @Field(() => LoanPaymentCreateManyLoanInputEnvelope, {nullable:true})
    createMany?: LoanPaymentCreateManyLoanInputEnvelope;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    set?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    disconnect?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    delete?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    connect?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentUpdateWithWhereUniqueWithoutLoanInput], {nullable:true})
    update?: Array<LoanPaymentUpdateWithWhereUniqueWithoutLoanInput>;

    @Field(() => [LoanPaymentUpdateManyWithWhereWithoutLoanInput], {nullable:true})
    updateMany?: Array<LoanPaymentUpdateManyWithWhereWithoutLoanInput>;

    @Field(() => [LoanPaymentScalarWhereInput], {nullable:true})
    deleteMany?: Array<LoanPaymentScalarWhereInput>;
}
