import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ExpensesSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    amountToPay?: keyof typeof SortOrder;
}
