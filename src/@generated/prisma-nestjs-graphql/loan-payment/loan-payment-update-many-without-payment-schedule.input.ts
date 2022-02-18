import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentCreateWithoutPaymentScheduleInput } from './loan-payment-create-without-payment-schedule.input';
import { LoanPaymentCreateOrConnectWithoutPaymentScheduleInput } from './loan-payment-create-or-connect-without-payment-schedule.input';
import { LoanPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput } from './loan-payment-upsert-with-where-unique-without-payment-schedule.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithWhereUniqueWithoutPaymentScheduleInput } from './loan-payment-update-with-where-unique-without-payment-schedule.input';
import { LoanPaymentUpdateManyWithWhereWithoutPaymentScheduleInput } from './loan-payment-update-many-with-where-without-payment-schedule.input';
import { LoanPaymentScalarWhereInput } from './loan-payment-scalar-where.input';

@InputType()
export class LoanPaymentUpdateManyWithoutPaymentScheduleInput {

    @Field(() => [LoanPaymentCreateWithoutPaymentScheduleInput], {nullable:true})
    create?: Array<LoanPaymentCreateWithoutPaymentScheduleInput>;

    @Field(() => [LoanPaymentCreateOrConnectWithoutPaymentScheduleInput], {nullable:true})
    connectOrCreate?: Array<LoanPaymentCreateOrConnectWithoutPaymentScheduleInput>;

    @Field(() => [LoanPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput], {nullable:true})
    upsert?: Array<LoanPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    set?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    disconnect?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    delete?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    connect?: Array<LoanPaymentWhereUniqueInput>;

    @Field(() => [LoanPaymentUpdateWithWhereUniqueWithoutPaymentScheduleInput], {nullable:true})
    update?: Array<LoanPaymentUpdateWithWhereUniqueWithoutPaymentScheduleInput>;

    @Field(() => [LoanPaymentUpdateManyWithWhereWithoutPaymentScheduleInput], {nullable:true})
    updateMany?: Array<LoanPaymentUpdateManyWithWhereWithoutPaymentScheduleInput>;

    @Field(() => [LoanPaymentScalarWhereInput], {nullable:true})
    deleteMany?: Array<LoanPaymentScalarWhereInput>;
}
