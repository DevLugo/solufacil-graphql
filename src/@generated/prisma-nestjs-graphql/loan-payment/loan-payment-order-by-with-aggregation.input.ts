import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { LoanPaymentCountOrderByAggregateInput } from './loan-payment-count-order-by-aggregate.input';
import { LoanPaymentAvgOrderByAggregateInput } from './loan-payment-avg-order-by-aggregate.input';
import { LoanPaymentMaxOrderByAggregateInput } from './loan-payment-max-order-by-aggregate.input';
import { LoanPaymentMinOrderByAggregateInput } from './loan-payment-min-order-by-aggregate.input';
import { LoanPaymentSumOrderByAggregateInput } from './loan-payment-sum-order-by-aggregate.input';

@InputType()
export class LoanPaymentOrderByWithAggregationInput {

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

    @Field(() => LoanPaymentCountOrderByAggregateInput, {nullable:true})
    _count?: LoanPaymentCountOrderByAggregateInput;

    @Field(() => LoanPaymentAvgOrderByAggregateInput, {nullable:true})
    _avg?: LoanPaymentAvgOrderByAggregateInput;

    @Field(() => LoanPaymentMaxOrderByAggregateInput, {nullable:true})
    _max?: LoanPaymentMaxOrderByAggregateInput;

    @Field(() => LoanPaymentMinOrderByAggregateInput, {nullable:true})
    _min?: LoanPaymentMinOrderByAggregateInput;

    @Field(() => LoanPaymentSumOrderByAggregateInput, {nullable:true})
    _sum?: LoanPaymentSumOrderByAggregateInput;
}
