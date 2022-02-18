import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScheduleCreateManyLoanInput } from './payment-schedule-create-many-loan.input';

@InputType()
export class PaymentScheduleCreateManyLoanInputEnvelope {

    @Field(() => [PaymentScheduleCreateManyLoanInput], {nullable:false})
    data!: Array<PaymentScheduleCreateManyLoanInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
