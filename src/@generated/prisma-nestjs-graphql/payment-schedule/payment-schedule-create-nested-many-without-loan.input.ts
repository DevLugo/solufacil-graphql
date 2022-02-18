import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleCreateWithoutLoanInput } from './payment-schedule-create-without-loan.input';
import { PaymentScheduleCreateOrConnectWithoutLoanInput } from './payment-schedule-create-or-connect-without-loan.input';
import { PaymentScheduleCreateManyLoanInputEnvelope } from './payment-schedule-create-many-loan-input-envelope.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';

@InputType()
export class PaymentScheduleCreateNestedManyWithoutLoanInput {

    @Field(() => [PaymentScheduleCreateWithoutLoanInput], {nullable:true})
    create?: Array<PaymentScheduleCreateWithoutLoanInput>;

    @Field(() => [PaymentScheduleCreateOrConnectWithoutLoanInput], {nullable:true})
    connectOrCreate?: Array<PaymentScheduleCreateOrConnectWithoutLoanInput>;

    @Field(() => PaymentScheduleCreateManyLoanInputEnvelope, {nullable:true})
    createMany?: PaymentScheduleCreateManyLoanInputEnvelope;

    @Field(() => [PaymentScheduleWhereUniqueInput], {nullable:true})
    connect?: Array<PaymentScheduleWhereUniqueInput>;
}
