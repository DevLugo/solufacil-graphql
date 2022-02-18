import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentCreateWithoutPaymentScheduleInput } from './loan-payment-create-without-payment-schedule.input';
import { LoanPaymentCreateOrConnectWithoutPaymentScheduleInput } from './loan-payment-create-or-connect-without-payment-schedule.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';

@InputType()
export class LoanPaymentCreateNestedManyWithoutPaymentScheduleInput {

    @Field(() => [LoanPaymentCreateWithoutPaymentScheduleInput], {nullable:true})
    create?: Array<LoanPaymentCreateWithoutPaymentScheduleInput>;

    @Field(() => [LoanPaymentCreateOrConnectWithoutPaymentScheduleInput], {nullable:true})
    connectOrCreate?: Array<LoanPaymentCreateOrConnectWithoutPaymentScheduleInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    connect?: Array<LoanPaymentWhereUniqueInput>;
}
