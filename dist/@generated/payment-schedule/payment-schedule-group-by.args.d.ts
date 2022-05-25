import { PaymentScheduleWhereInput } from './payment-schedule-where.input';
import { PaymentScheduleOrderByWithAggregationInput } from './payment-schedule-order-by-with-aggregation.input';
import { PaymentScheduleScalarFieldEnum } from './payment-schedule-scalar-field.enum';
import { PaymentScheduleScalarWhereWithAggregatesInput } from './payment-schedule-scalar-where-with-aggregates.input';
import { PaymentScheduleCountAggregateInput } from './payment-schedule-count-aggregate.input';
import { PaymentScheduleAvgAggregateInput } from './payment-schedule-avg-aggregate.input';
import { PaymentScheduleSumAggregateInput } from './payment-schedule-sum-aggregate.input';
import { PaymentScheduleMinAggregateInput } from './payment-schedule-min-aggregate.input';
import { PaymentScheduleMaxAggregateInput } from './payment-schedule-max-aggregate.input';
export declare class PaymentScheduleGroupByArgs {
    where?: PaymentScheduleWhereInput;
    orderBy?: Array<PaymentScheduleOrderByWithAggregationInput>;
    by: Array<keyof typeof PaymentScheduleScalarFieldEnum>;
    having?: PaymentScheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentScheduleCountAggregateInput;
    _avg?: PaymentScheduleAvgAggregateInput;
    _sum?: PaymentScheduleSumAggregateInput;
    _min?: PaymentScheduleMinAggregateInput;
    _max?: PaymentScheduleMaxAggregateInput;
}
