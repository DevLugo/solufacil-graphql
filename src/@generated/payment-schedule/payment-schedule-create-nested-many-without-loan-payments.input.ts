import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleCreateWithoutLoanPaymentsInput } from './payment-schedule-create-without-loan-payments.input';
import { PaymentScheduleCreateOrConnectWithoutLoanPaymentsInput } from './payment-schedule-create-or-connect-without-loan-payments.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';

@InputType()
export class PaymentScheduleCreateNestedManyWithoutLoanPaymentsInput {

    @Field(() => [PaymentScheduleCreateWithoutLoanPaymentsInput], {nullable:true})
    create?: Array<PaymentScheduleCreateWithoutLoanPaymentsInput>;

    @Field(() => [PaymentScheduleCreateOrConnectWithoutLoanPaymentsInput], {nullable:true})
    connectOrCreate?: Array<PaymentScheduleCreateOrConnectWithoutLoanPaymentsInput>;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    connect?: Array<PaymentScheduleWhereUniqueInput>;
}
