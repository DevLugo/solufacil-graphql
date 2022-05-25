import { LoanPaymentWhereInput } from './loan-payment-where.input';
import { LoanPaymentOrderByWithRelationInput } from './loan-payment-order-by-with-relation.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentCountAggregateInput } from './loan-payment-count-aggregate.input';
import { LoanPaymentAvgAggregateInput } from './loan-payment-avg-aggregate.input';
import { LoanPaymentSumAggregateInput } from './loan-payment-sum-aggregate.input';
import { LoanPaymentMinAggregateInput } from './loan-payment-min-aggregate.input';
import { LoanPaymentMaxAggregateInput } from './loan-payment-max-aggregate.input';
export declare class LoanPaymentAggregateArgs {
    where?: LoanPaymentWhereInput;
    orderBy?: Array<LoanPaymentOrderByWithRelationInput>;
    cursor?: LoanPaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: LoanPaymentCountAggregateInput;
    _avg?: LoanPaymentAvgAggregateInput;
    _sum?: LoanPaymentSumAggregateInput;
    _min?: LoanPaymentMinAggregateInput;
    _max?: LoanPaymentMaxAggregateInput;
}
