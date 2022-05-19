import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentCreateWithoutEmployeeInput } from './commission-payment-create-without-employee.input';
import { CommissionPaymentCreateOrConnectWithoutEmployeeInput } from './commission-payment-create-or-connect-without-employee.input';
import { CommissionPaymentUpsertWithWhereUniqueWithoutEmployeeInput } from './commission-payment-upsert-with-where-unique-without-employee.input';
import { CommissionPaymentCreateManyEmployeeInputEnvelope } from './commission-payment-create-many-employee-input-envelope.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentUpdateWithWhereUniqueWithoutEmployeeInput } from './commission-payment-update-with-where-unique-without-employee.input';
import { CommissionPaymentUpdateManyWithWhereWithoutEmployeeInput } from './commission-payment-update-many-with-where-without-employee.input';
import { CommissionPaymentScalarWhereInput } from './commission-payment-scalar-where.input';

@InputType()
export class CommissionPaymentUncheckedUpdateManyWithoutEmployeeInput {

    @Field(() => [CommissionPaymentCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<CommissionPaymentCreateWithoutEmployeeInput>;

    @Field(() => [CommissionPaymentCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<CommissionPaymentCreateOrConnectWithoutEmployeeInput>;

    @Field(() => [CommissionPaymentUpsertWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    upsert?: Array<CommissionPaymentUpsertWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => CommissionPaymentCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: CommissionPaymentCreateManyEmployeeInputEnvelope;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    set?: Array<CommissionPaymentWhereUniqueInput>;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CommissionPaymentWhereUniqueInput>;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    delete?: Array<CommissionPaymentWhereUniqueInput>;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    connect?: Array<CommissionPaymentWhereUniqueInput>;

    @Field(() => [CommissionPaymentUpdateWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    update?: Array<CommissionPaymentUpdateWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => [CommissionPaymentUpdateManyWithWhereWithoutEmployeeInput], {nullable:true})
    updateMany?: Array<CommissionPaymentUpdateManyWithWhereWithoutEmployeeInput>;

    @Field(() => [CommissionPaymentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CommissionPaymentScalarWhereInput>;
}
