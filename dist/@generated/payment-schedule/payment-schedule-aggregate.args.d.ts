import { PaymentScheduleWhereInput } from './payment-schedule-where.input';
import { PaymentScheduleOrderByWithRelationInput } from './payment-schedule-order-by-with-relation.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleCountAggregateInput } from './payment-schedule-count-aggregate.input';
import { PaymentScheduleAvgAggregateInput } from './payment-schedule-avg-aggregate.input';
import { PaymentScheduleSumAggregateInput } from './payment-schedule-sum-aggregate.input';
import { PaymentScheduleMinAggregateInput } from './payment-schedule-min-aggregate.input';
import { PaymentScheduleMaxAggregateInput } from './payment-schedule-max-aggregate.input';
export declare class PaymentScheduleAggregateArgs {
    where?: PaymentScheduleWhereInput;
    orderBy?: Array<PaymentScheduleOrderByWithRelationInput>;
    cursor?: PaymentScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: PaymentScheduleCountAggregateInput;
    _avg?: PaymentScheduleAvgAggregateInput;
    _sum?: PaymentScheduleSumAggregateInput;
    _min?: PaymentScheduleMinAggregateInput;
    _max?: PaymentScheduleMaxAggregateInput;
}
