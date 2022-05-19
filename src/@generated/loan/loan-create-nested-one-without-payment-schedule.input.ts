import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateWithoutPaymentScheduleInput } from './loan-create-without-payment-schedule.input';
import { LoanCreateOrConnectWithoutPaymentScheduleInput } from './loan-create-or-connect-without-payment-schedule.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';

@InputType()
export class LoanCreateNestedOneWithoutPaymentScheduleInput {

    @Field(() => LoanCreateWithoutPaymentScheduleInput, {nullable:true})
    create?: LoanCreateWithoutPaymentScheduleInput;

    @Field(() => LoanCreateOrConnectWithoutPaymentScheduleInput, {nullable:true})
    connectOrCreate?: LoanCreateOrConnectWithoutPaymentScheduleInput;

    @Field(() => LoanWhereUniqueInput, {nullable:true})
    connect?: LoanWhereUniqueInput;
}
