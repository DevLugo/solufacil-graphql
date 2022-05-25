import { LoanCountAggregate } from './loan-count-aggregate.output';
import { LoanAvgAggregate } from './loan-avg-aggregate.output';
import { LoanSumAggregate } from './loan-sum-aggregate.output';
import { LoanMinAggregate } from './loan-min-aggregate.output';
import { LoanMaxAggregate } from './loan-max-aggregate.output';
export declare class AggregateLoan {
    _count?: LoanCountAggregate;
    _avg?: LoanAvgAggregate;
    _sum?: LoanSumAggregate;
    _min?: LoanMinAggregate;
    _max?: LoanMaxAggregate;
}
