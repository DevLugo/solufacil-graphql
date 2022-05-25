import { BorrowerCountAggregate } from './borrower-count-aggregate.output';
import { BorrowerMinAggregate } from './borrower-min-aggregate.output';
import { BorrowerMaxAggregate } from './borrower-max-aggregate.output';
export declare class AggregateBorrower {
    _count?: BorrowerCountAggregate;
    _min?: BorrowerMinAggregate;
    _max?: BorrowerMaxAggregate;
}
