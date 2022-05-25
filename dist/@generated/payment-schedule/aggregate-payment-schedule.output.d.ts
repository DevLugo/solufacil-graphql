import { PaymentScheduleCountAggregate } from './payment-schedule-count-aggregate.output';
import { PaymentScheduleAvgAggregate } from './payment-schedule-avg-aggregate.output';
import { PaymentScheduleSumAggregate } from './payment-schedule-sum-aggregate.output';
import { PaymentScheduleMinAggregate } from './payment-schedule-min-aggregate.output';
import { PaymentScheduleMaxAggregate } from './payment-schedule-max-aggregate.output';
export declare class AggregatePaymentSchedule {
    _count?: PaymentScheduleCountAggregate;
    _avg?: PaymentScheduleAvgAggregate;
    _sum?: PaymentScheduleSumAggregate;
    _min?: PaymentScheduleMinAggregate;
    _max?: PaymentScheduleMaxAggregate;
}
