import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentScheduleWhereInput } from './payment-schedule-where.input';
import { PaymentScheduleOrderByWithRelationInput } from './payment-schedule-order-by-with-relation.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PaymentScheduleCountAggregateInput } from './payment-schedule-count-aggregate.input';
import { PaymentScheduleAvgAggregateInput } from './payment-schedule-avg-aggregate.input';
import { PaymentScheduleSumAggregateInput } from './payment-schedule-sum-aggregate.input';
import { PaymentScheduleMinAggregateInput } from './payment-schedule-min-aggregate.input';
import { PaymentScheduleMaxAggregateInput } from './payment-schedule-max-aggregate.input';

@ArgsType()
export class PaymentScheduleAggregateArgs {

    @Field(() => PaymentScheduleWhereInput, {nullable:true})
    where?: PaymentScheduleWhereInput;

    @Field(() => [PaymentScheduleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PaymentScheduleOrderByWithRelationInput>;

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:true})
    cursor?: PaymentScheduleWhereUniqueInput;

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
