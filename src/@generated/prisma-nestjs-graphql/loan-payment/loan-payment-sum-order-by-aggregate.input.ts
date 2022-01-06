import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class LoanPaymentSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    numeration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;
}
