import { LoanPaymentWhereInput } from './loan-payment-where.input';
import { LoanPaymentOrderByWithAggregationInput } from './loan-payment-order-by-with-aggregation.input';
import { LoanPaymentScalarFieldEnum } from './loan-payment-scalar-field.enum';
import { LoanPaymentScalarWhereWithAggregatesInput } from './loan-payment-scalar-where-with-aggregates.input';
import { LoanPaymentCountAggregateInput } from './loan-payment-count-aggregate.input';
import { LoanPaymentAvgAggregateInput } from './loan-payment-avg-aggregate.input';
import { LoanPaymentSumAggregateInput } from './loan-payment-sum-aggregate.input';
import { LoanPaymentMinAggregateInput } from './loan-payment-min-aggregate.input';
import { LoanPaymentMaxAggregateInput } from './loan-payment-max-aggregate.input';
export declare class LoanPaymentGroupByArgs {
    where?: LoanPaymentWhereInput;
    orderBy?: Array<LoanPaymentOrderByWithAggregationInput>;
    by: Array<keyof typeof LoanPaymentScalarFieldEnum>;
    having?: LoanPaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoanPaymentCountAggregateInput;
    _avg?: LoanPaymentAvgAggregateInput;
    _sum?: LoanPaymentSumAggregateInput;
    _min?: LoanPaymentMinAggregateInput;
    _max?: LoanPaymentMaxAggregateInput;
}
