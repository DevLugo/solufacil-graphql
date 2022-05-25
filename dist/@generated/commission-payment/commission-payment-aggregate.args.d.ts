import { CommissionPaymentWhereInput } from './commission-payment-where.input';
import { CommissionPaymentOrderByWithRelationInput } from './commission-payment-order-by-with-relation.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentCountAggregateInput } from './commission-payment-count-aggregate.input';
import { CommissionPaymentAvgAggregateInput } from './commission-payment-avg-aggregate.input';
import { CommissionPaymentSumAggregateInput } from './commission-payment-sum-aggregate.input';
import { CommissionPaymentMinAggregateInput } from './commission-payment-min-aggregate.input';
import { CommissionPaymentMaxAggregateInput } from './commission-payment-max-aggregate.input';
export declare class CommissionPaymentAggregateArgs {
    where?: CommissionPaymentWhereInput;
    orderBy?: Array<CommissionPaymentOrderByWithRelationInput>;
    cursor?: CommissionPaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: CommissionPaymentCountAggregateInput;
    _avg?: CommissionPaymentAvgAggregateInput;
    _sum?: CommissionPaymentSumAggregateInput;
    _min?: CommissionPaymentMinAggregateInput;
    _max?: CommissionPaymentMaxAggregateInput;
}
