import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentCreateWithoutEmployeeInput } from './loan-payment-create-without-employee.input';
import { LoanPaymentCreateOrConnectWithoutEmployeeInput } from './loan-payment-create-or-connect-without-employee.input';
import { LoanPaymentUpsertWithWhereUniqueWithoutEmployeeInput } from './loan-payment-upsert-with-where-unique-without-employee.input';
import { LoanPaymentCreateManyEmployeeInputEnvelope } from './loan-payment-create-many-employee-input-envelope.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithWhereUniqueWithoutEmployeeInput } from './loan-payment-update-with-where-unique-without-employee.input';
import { LoanPaymentUpdateManyWithWhereWithoutEmployeeInput } from './loan-payment-update-many-with-where-without-employee.input';
import { LoanPaymentScalarWhereInput } from './loan-payment-scalar-where.input';

@InputType()
export class LoanPaymentUpdateManyWithoutEmployeeInput {

    @Field(() => [LoanPaymentCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<LoanPaymentCreateWithoutEmployeeInput>;

    @Field(() => [LoanPaymentCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<LoanPaymentCreateOrConnectWithoutEmployeeInput>;

    @Field(() => [LoanPaymentUpsertWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    upsert?: Array<LoanPaymentUpsertWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => LoanPaymentCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: LoanPaymentCreateManyEmployeeInputEnvelope;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    set?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    disconnect?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    delete?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    connect?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentUpdateWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    update?: Array<LoanPaymentUpdateWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => [LoanPaymentUpdateManyWithWhereWithoutEmployeeInput], {nullable:true})
    updateMany?: Array<LoanPaymentUpdateManyWithWhereWithoutEmployeeInput>;

    @Field(() => [LoanPaymentScalarWhereInput], {nullable:true})
    deleteMany?: Array<LoanPaymentScalarWhereInput>;
}
