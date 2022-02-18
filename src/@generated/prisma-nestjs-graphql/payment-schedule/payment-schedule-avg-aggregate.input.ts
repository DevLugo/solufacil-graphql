import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PaymentScheduleAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    numeration?: true;

    @Field(() => Boolean, {nullable:true})
    amountToPay?: true;

    @Field(() => Boolean, {nullable:true})
    paidAmount?: true;
}
