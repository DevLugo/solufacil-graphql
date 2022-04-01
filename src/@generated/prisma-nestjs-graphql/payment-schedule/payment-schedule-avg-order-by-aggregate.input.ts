import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PaymentScheduleAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    numeration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amountToPay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paidAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    returnToCapital?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profit?: keyof typeof SortOrder;
}
