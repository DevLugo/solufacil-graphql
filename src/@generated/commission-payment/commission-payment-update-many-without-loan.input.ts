import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentCreateWithoutLoanInput } from './commission-payment-create-without-loan.input';
import { CommissionPaymentCreateOrConnectWithoutLoanInput } from './commission-payment-create-or-connect-without-loan.input';
import { CommissionPaymentUpsertWithWhereUniqueWithoutLoanInput } from './commission-payment-upsert-with-where-unique-without-loan.input';
import { CommissionPaymentCreateManyLoanInputEnvelope } from './commission-payment-create-many-loan-input-envelope.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentUpdateWithWhereUniqueWithoutLoanInput } from './commission-payment-update-with-where-unique-without-loan.input';
import { CommissionPaymentUpdateManyWithWhereWithoutLoanInput } from './commission-payment-update-many-with-where-without-loan.input';
import { CommissionPaymentScalarWhereInput } from './commission-payment-scalar-where.input';

@InputType()
export class CommissionPaymentUpdateManyWithoutLoanInput {

    @Field(() => [CommissionPaymentCreateWithoutLoanInput], {nullable:true})
    create?: Array<CommissionPaymentCreateWithoutLoanInput>;

    @Field(() => [CommissionPaymentCreateOrConnectWithoutLoanInput], {nullable:true})
    connectOrCreate?: Array<CommissionPaymentCreateOrConnectWithoutLoanInput>;

    @Field(() => [CommissionPaymentUpsertWithWhereUniqueWithoutLoanInput], {nullable:true})
    upsert?: Array<CommissionPaymentUpsertWithWhereUniqueWithoutLoanInput>;

    @Field(() => CommissionPaymentCreateManyLoanInputEnvelope, {nullable:true})
    createMany?: CommissionPaymentCreateManyLoanInputEnvelope;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    set?: Array<CommissionPaymentWhereUniqueInput>;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CommissionPaymentWhereUniqueInput>;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    delete?: Array<CommissionPaymentWhereUniqueInput>;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    connect?: Array<CommissionPaymentWhereUniqueInput>;

    @Field(() => [CommissionPaymentUpdateWithWhereUniqueWithoutLoanInput], {nullable:true})
    update?: Array<CommissionPaymentUpdateWithWhereUniqueWithoutLoanInput>;

    @Field(() => [CommissionPaymentUpdateManyWithWhereWithoutLoanInput], {nullable:true})
    updateMany?: Array<CommissionPaymentUpdateManyWithWhereWithoutLoanInput>;

    @Field(() => [CommissionPaymentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CommissionPaymentScalarWhereInput>;
}
