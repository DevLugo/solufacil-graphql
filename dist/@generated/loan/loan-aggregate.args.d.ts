import { LoanWhereInput } from './loan-where.input';
import { LoanOrderByWithRelationInput } from './loan-order-by-with-relation.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanCountAggregateInput } from './loan-count-aggregate.input';
import { LoanAvgAggregateInput } from './loan-avg-aggregate.input';
import { LoanSumAggregateInput } from './loan-sum-aggregate.input';
import { LoanMinAggregateInput } from './loan-min-aggregate.input';
import { LoanMaxAggregateInput } from './loan-max-aggregate.input';
export declare class LoanAggregateArgs {
    where?: LoanWhereInput;
    orderBy?: Array<LoanOrderByWithRelationInput>;
    cursor?: LoanWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: LoanCountAggregateInput;
    _avg?: LoanAvgAggregateInput;
    _sum?: LoanSumAggregateInput;
    _min?: LoanMinAggregateInput;
    _max?: LoanMaxAggregateInput;
}
