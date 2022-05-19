import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentScheduleCreateInput } from './payment-schedule-create.input';

@ArgsType()
export class CreateOnePaymentScheduleArgs {

    @Field(() => PaymentScheduleCreateInput, {nullable:false})
    data!: PaymentScheduleCreateInput;
}
