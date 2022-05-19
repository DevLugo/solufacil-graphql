import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CommissionPaymentCountOrderByAggregateInput } from './commission-payment-count-order-by-aggregate.input';
import { CommissionPaymentAvgOrderByAggregateInput } from './commission-payment-avg-order-by-aggregate.input';
import { CommissionPaymentMaxOrderByAggregateInput } from './commission-payment-max-order-by-aggregate.input';
import { CommissionPaymentMinOrderByAggregateInput } from './commission-payment-min-order-by-aggregate.input';
import { CommissionPaymentSumOrderByAggregateInput } from './commission-payment-sum-order-by-aggregate.input';

@InputType()
export class CommissionPaymentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    loanId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paymentScheduleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => CommissionPaymentCountOrderByAggregateInput, {nullable:true})
    _count?: CommissionPaymentCountOrderByAggregateInput;

    @Field(() => CommissionPaymentAvgOrderByAggregateInput, {nullable:true})
    _avg?: CommissionPaymentAvgOrderByAggregateInput;

    @Field(() => CommissionPaymentMaxOrderByAggregateInput, {nullable:true})
    _max?: CommissionPaymentMaxOrderByAggregateInput;

    @Field(() => CommissionPaymentMinOrderByAggregateInput, {nullable:true})
    _min?: CommissionPaymentMinOrderByAggregateInput;

    @Field(() => CommissionPaymentSumOrderByAggregateInput, {nullable:true})
    _sum?: CommissionPaymentSumOrderByAggregateInput;
}
