import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PaymentScheduleSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    numeration?: true;

    @Field(() => Boolean, {nullable:true})
    amountToPay?: true;

    @Field(() => Boolean, {nullable:true})
    paidAmount?: true;

    @Field(() => Boolean, {nullable:true})
    returnToCapital?: true;

    @Field(() => Boolean, {nullable:true})
    profit?: true;
}
