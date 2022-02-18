import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentCreateManyPaymentScheduleInput } from './loan-payment-create-many-payment-schedule.input';

@InputType()
export class LoanPaymentCreateManyPaymentScheduleInputEnvelope {

    @Field(() => [LoanPaymentCreateManyPaymentScheduleInput], {nullable:false})
    data!: Array<LoanPaymentCreateManyPaymentScheduleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
