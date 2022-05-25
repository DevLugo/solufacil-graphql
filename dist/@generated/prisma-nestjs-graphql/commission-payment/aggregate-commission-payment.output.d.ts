import { CommissionPaymentCountAggregate } from './commission-payment-count-aggregate.output';
import { CommissionPaymentAvgAggregate } from './commission-payment-avg-aggregate.output';
import { CommissionPaymentSumAggregate } from './commission-payment-sum-aggregate.output';
import { CommissionPaymentMinAggregate } from './commission-payment-min-aggregate.output';
import { CommissionPaymentMaxAggregate } from './commission-payment-max-aggregate.output';
export declare class AggregateCommissionPayment {
    _count?: CommissionPaymentCountAggregate;
    _avg?: CommissionPaymentAvgAggregate;
    _sum?: CommissionPaymentSumAggregate;
    _min?: CommissionPaymentMinAggregate;
    _max?: CommissionPaymentMaxAggregate;
}
