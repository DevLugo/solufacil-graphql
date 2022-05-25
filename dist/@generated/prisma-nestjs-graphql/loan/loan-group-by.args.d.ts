import { LoanWhereInput } from './loan-where.input';
import { LoanOrderByWithAggregationInput } from './loan-order-by-with-aggregation.input';
import { LoanScalarFieldEnum } from './loan-scalar-field.enum';
import { LoanScalarWhereWithAggregatesInput } from './loan-scalar-where-with-aggregates.input';
import { LoanCountAggregateInput } from './loan-count-aggregate.input';
import { LoanAvgAggregateInput } from './loan-avg-aggregate.input';
import { LoanSumAggregateInput } from './loan-sum-aggregate.input';
import { LoanMinAggregateInput } from './loan-min-aggregate.input';
import { LoanMaxAggregateInput } from './loan-max-aggregate.input';
export declare class LoanGroupByArgs {
    where?: LoanWhereInput;
    orderBy?: Array<LoanOrderByWithAggregationInput>;
    by: Array<keyof typeof LoanScalarFieldEnum>;
    having?: LoanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoanCountAggregateInput;
    _avg?: LoanAvgAggregateInput;
    _sum?: LoanSumAggregateInput;
    _min?: LoanMinAggregateInput;
    _max?: LoanMaxAggregateInput;
}
