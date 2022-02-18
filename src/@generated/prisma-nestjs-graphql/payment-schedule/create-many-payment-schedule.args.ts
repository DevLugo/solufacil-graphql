import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentScheduleCreateManyInput } from './payment-schedule-create-many.input';

@ArgsType()
export class CreateManyPaymentScheduleArgs {

    @Field(() => [PaymentScheduleCreateManyInput], {nullable:false})
    data!: Array<PaymentScheduleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
