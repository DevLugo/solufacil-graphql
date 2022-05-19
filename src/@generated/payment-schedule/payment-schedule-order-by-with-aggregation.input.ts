import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { PaymentScheduleCountOrderByAggregateInput } from './payment-schedule-count-order-by-aggregate.input';
import { PaymentScheduleAvgOrderByAggregateInput } from './payment-schedule-avg-order-by-aggregate.input';
import { PaymentScheduleMaxOrderByAggregateInput } from './payment-schedule-max-order-by-aggregate.input';
import { PaymentScheduleMinOrderByAggregateInput } from './payment-schedule-min-order-by-aggregate.input';
import { PaymentScheduleSumOrderByAggregateInput } from './payment-schedule-sum-order-by-aggregate.input';

@InputType()
export class PaymentScheduleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

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

    @HideField()
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delayed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dueDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    details?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    loanId?: keyof typeof SortOrder;

    @Field(() => PaymentScheduleCountOrderByAggregateInput, {nullable:true})
    _count?: PaymentScheduleCountOrderByAggregateInput;

    @Field(() => PaymentScheduleAvgOrderByAggregateInput, {nullable:true})
    _avg?: PaymentScheduleAvgOrderByAggregateInput;

    @Field(() => PaymentScheduleMaxOrderByAggregateInput, {nullable:true})
    _max?: PaymentScheduleMaxOrderByAggregateInput;

    @Field(() => PaymentScheduleMinOrderByAggregateInput, {nullable:true})
    _min?: PaymentScheduleMinOrderByAggregateInput;

    @Field(() => PaymentScheduleSumOrderByAggregateInput, {nullable:true})
    _sum?: PaymentScheduleSumOrderByAggregateInput;
}
