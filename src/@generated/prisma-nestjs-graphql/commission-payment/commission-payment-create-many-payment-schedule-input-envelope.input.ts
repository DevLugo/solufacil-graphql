import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentCreateManyPaymentScheduleInput } from './commission-payment-create-many-payment-schedule.input';

@InputType()
export class CommissionPaymentCreateManyPaymentScheduleInputEnvelope {

    @Field(() => [CommissionPaymentCreateManyPaymentScheduleInput], {nullable:false})
    data!: Array<CommissionPaymentCreateManyPaymentScheduleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
