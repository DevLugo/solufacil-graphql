import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LoanPaymentMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    numeration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @HideField()
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paidDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dueDate?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    loanId?: keyof typeof SortOrder;
}
