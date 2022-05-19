import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentCreateWithoutLoanInput } from './commission-payment-create-without-loan.input';
import { CommissionPaymentCreateOrConnectWithoutLoanInput } from './commission-payment-create-or-connect-without-loan.input';
import { CommissionPaymentCreateManyLoanInputEnvelope } from './commission-payment-create-many-loan-input-envelope.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';

@InputType()
export class CommissionPaymentUncheckedCreateNestedManyWithoutLoanInput {

    @Field(() => [CommissionPaymentCreateWithoutLoanInput], {nullable:true})
    create?: Array<CommissionPaymentCreateWithoutLoanInput>;

    @Field(() => [CommissionPaymentCreateOrConnectWithoutLoanInput], {nullable:true})
    connectOrCreate?: Array<CommissionPaymentCreateOrConnectWithoutLoanInput>;

    @Field(() => CommissionPaymentCreateManyLoanInputEnvelope, {nullable:true})
    createMany?: CommissionPaymentCreateManyLoanInputEnvelope;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    connect?: Array<CommissionPaymentWhereUniqueInput>;
}
