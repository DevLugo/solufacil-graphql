import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleScalarWhereInput } from './payment-schedule-scalar-where.input';
import { PaymentScheduleUpdateManyMutationInput } from './payment-schedule-update-many-mutation.input';

@InputType()
export class PaymentScheduleUpdateManyWithWhereWithoutLoanPaymentInput {

    @Field(() => PaymentScheduleScalarWhereInput, {nullable:false})
    where!: PaymentScheduleScalarWhereInput;

    @Field(() => PaymentScheduleUpdateManyMutationInput, {nullable:false})
    data!: PaymentScheduleUpdateManyMutationInput;
}
