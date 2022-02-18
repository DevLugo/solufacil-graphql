import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanCreateWithoutPaymentScheduleInput } from './loan-create-without-payment-schedule.input';

@InputType()
export class LoanCreateOrConnectWithoutPaymentScheduleInput {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;

    @Field(() => LoanCreateWithoutPaymentScheduleInput, {nullable:false})
    create!: LoanCreateWithoutPaymentScheduleInput;
}
