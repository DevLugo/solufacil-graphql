import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentCreateWithoutPaymentSchedulesInput } from './loan-payment-create-without-payment-schedules.input';
import { LoanPaymentCreateOrConnectWithoutPaymentSchedulesInput } from './loan-payment-create-or-connect-without-payment-schedules.input';
import { LoanPaymentUpsertWithWhereUniqueWithoutPaymentSchedulesInput } from './loan-payment-upsert-with-where-unique-without-payment-schedules.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput } from './loan-payment-update-with-where-unique-without-payment-schedules.input';
import { LoanPaymentUpdateManyWithWhereWithoutPaymentSchedulesInput } from './loan-payment-update-many-with-where-without-payment-schedules.input';
import { LoanPaymentScalarWhereInput } from './loan-payment-scalar-where.input';

@InputType()
export class LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput {

    @Field(() => [LoanPaymentCreateWithoutPaymentSchedulesInput], {nullable:true})
    create?: Array<LoanPaymentCreateWithoutPaymentSchedulesInput>;

    @Field(() => [LoanPaymentCreateOrConnectWithoutPaymentSchedulesInput], {nullable:true})
    connectOrCreate?: Array<LoanPaymentCreateOrConnectWithoutPaymentSchedulesInput>;

    @Field(() => [LoanPaymentUpsertWithWhereUniqueWithoutPaymentSchedulesInput], {nullable:true})
    upsert?: Array<LoanPaymentUpsertWithWhereUniqueWithoutPaymentSchedulesInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    set?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    disconnect?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    delete?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    connect?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput], {nullable:true})
    update?: Array<LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput>;

    @Field(() => [LoanPaymentUpdateManyWithWhereWithoutPaymentSchedulesInput], {nullable:true})
    updateMany?: Array<LoanPaymentUpdateManyWithWhereWithoutPaymentSchedulesInput>;

    @Field(() => [LoanPaymentScalarWhereInput], {nullable:true})
    deleteMany?: Array<LoanPaymentScalarWhereInput>;
}
