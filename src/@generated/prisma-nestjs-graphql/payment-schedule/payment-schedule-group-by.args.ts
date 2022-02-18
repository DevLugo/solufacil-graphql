import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentScheduleWhereInput } from './payment-schedule-where.input';
import { PaymentScheduleOrderByWithAggregationInput } from './payment-schedule-order-by-with-aggregation.input';
import { PaymentScheduleScalarFieldEnum } from './payment-schedule-scalar-field.enum';
import { PaymentScheduleScalarWhereWithAggregatesInput } from './payment-schedule-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PaymentScheduleCountAggregateInput } from './payment-schedule-count-aggregate.input';
import { PaymentScheduleAvgAggregateInput } from './payment-schedule-avg-aggregate.input';
import { PaymentScheduleSumAggregateInput } from './payment-schedule-sum-aggregate.input';
import { PaymentScheduleMinAggregateInput } from './payment-schedule-min-aggregate.input';
import { PaymentScheduleMaxAggregateInput } from './payment-schedule-max-aggregate.input';

@ArgsType()
export class PaymentScheduleGroupByArgs {

    @Field(() => PaymentScheduleWhereInput, {nullable:true})
    where?: PaymentScheduleWhereInput;

    @Field(() => [PaymentScheduleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PaymentScheduleOrderByWithAggregationInput>;

    @Field(() => [PaymentScheduleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PaymentScheduleScalarFieldEnum>;

    @Field(() => PaymentScheduleScalarWhereWithAggregatesInput, {nullable:true})
    having?: PaymentScheduleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PaymentScheduleCountAggregateInput, {nullable:true})
    _count?: PaymentScheduleCountAggregateInput;

    @Field(() => PaymentScheduleAvgAggregateInput, {nullable:true})
    _avg?: PaymentScheduleAvgAggregateInput;

    @Field(() => PaymentScheduleSumAggregateInput, {nullable:true})
    _sum?: PaymentScheduleSumAggregateInput;

    @Field(() => PaymentScheduleMinAggregateInput, {nullable:true})
    _min?: PaymentScheduleMinAggregateInput;

    @Field(() => PaymentScheduleMaxAggregateInput, {nullable:true})
    _max?: PaymentScheduleMaxAggregateInput;
}
