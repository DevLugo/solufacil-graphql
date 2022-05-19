import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentScheduleUpdateManyMutationInput } from './payment-schedule-update-many-mutation.input';
import { PaymentScheduleWhereInput } from './payment-schedule-where.input';

@ArgsType()
export class UpdateManyPaymentScheduleArgs {

    @Field(() => PaymentScheduleUpdateManyMutationInput, {nullable:false})
    data!: PaymentScheduleUpdateManyMutationInput;

    @Field(() => PaymentScheduleWhereInput, {nullable:true})
    where?: PaymentScheduleWhereInput;
}
