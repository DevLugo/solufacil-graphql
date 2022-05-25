import { CommissionPaymentWhereInput } from './commission-payment-where.input';
import { CommissionPaymentOrderByWithAggregationInput } from './commission-payment-order-by-with-aggregation.input';
import { CommissionPaymentScalarFieldEnum } from './commission-payment-scalar-field.enum';
import { CommissionPaymentScalarWhereWithAggregatesInput } from './commission-payment-scalar-where-with-aggregates.input';
import { CommissionPaymentCountAggregateInput } from './commission-payment-count-aggregate.input';
import { CommissionPaymentAvgAggregateInput } from './commission-payment-avg-aggregate.input';
import { CommissionPaymentSumAggregateInput } from './commission-payment-sum-aggregate.input';
import { CommissionPaymentMinAggregateInput } from './commission-payment-min-aggregate.input';
import { CommissionPaymentMaxAggregateInput } from './commission-payment-max-aggregate.input';
export declare class CommissionPaymentGroupByArgs {
    where?: CommissionPaymentWhereInput;
    orderBy?: Array<CommissionPaymentOrderByWithAggregationInput>;
    by: Array<keyof typeof CommissionPaymentScalarFieldEnum>;
    having?: CommissionPaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommissionPaymentCountAggregateInput;
    _avg?: CommissionPaymentAvgAggregateInput;
    _sum?: CommissionPaymentSumAggregateInput;
    _min?: CommissionPaymentMinAggregateInput;
    _max?: CommissionPaymentMaxAggregateInput;
}
