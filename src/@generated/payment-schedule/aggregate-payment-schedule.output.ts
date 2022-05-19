import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PaymentScheduleCountAggregate } from './payment-schedule-count-aggregate.output';
import { PaymentScheduleAvgAggregate } from './payment-schedule-avg-aggregate.output';
import { PaymentScheduleSumAggregate } from './payment-schedule-sum-aggregate.output';
import { PaymentScheduleMinAggregate } from './payment-schedule-min-aggregate.output';
import { PaymentScheduleMaxAggregate } from './payment-schedule-max-aggregate.output';

@ObjectType()
export class AggregatePaymentSchedule {

    @Field(() => PaymentScheduleCountAggregate, {nullable:true})
    _count?: PaymentScheduleCountAggregate;

    @Field(() => PaymentScheduleAvgAggregate, {nullable:true})
    _avg?: PaymentScheduleAvgAggregate;

    @Field(() => PaymentScheduleSumAggregate, {nullable:true})
    _sum?: PaymentScheduleSumAggregate;

    @Field(() => PaymentScheduleMinAggregate, {nullable:true})
    _min?: PaymentScheduleMinAggregate;

    @Field(() => PaymentScheduleMaxAggregate, {nullable:true})
    _max?: PaymentScheduleMaxAggregate;
}
