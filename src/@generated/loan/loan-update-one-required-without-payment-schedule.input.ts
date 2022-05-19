import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateWithoutPaymentScheduleInput } from './loan-create-without-payment-schedule.input';
import { LoanCreateOrConnectWithoutPaymentScheduleInput } from './loan-create-or-connect-without-payment-schedule.input';
import { LoanUpsertWithoutPaymentScheduleInput } from './loan-upsert-without-payment-schedule.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithoutPaymentScheduleInput } from './loan-update-without-payment-schedule.input';

@InputType()
export class LoanUpdateOneRequiredWithoutPaymentScheduleInput {

    @Field(() => LoanCreateWithoutPaymentScheduleInput, {nullable:true})
    create?: LoanCreateWithoutPaymentScheduleInput;

    @Field(() => LoanCreateOrConnectWithoutPaymentScheduleInput, {nullable:true})
    connectOrCreate?: LoanCreateOrConnectWithoutPaymentScheduleInput;

    @Field(() => LoanUpsertWithoutPaymentScheduleInput, {nullable:true})
    upsert?: LoanUpsertWithoutPaymentScheduleInput;

    @Field(() => LoanWhereUniqueInput, {nullable:true})
    connect?: LoanWhereUniqueInput;

    @Field(() => LoanUpdateWithoutPaymentScheduleInput, {nullable:true})
    update?: LoanUpdateWithoutPaymentScheduleInput;
}
