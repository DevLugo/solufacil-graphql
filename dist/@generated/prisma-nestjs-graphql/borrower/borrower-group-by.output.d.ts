import { BorrowerCountAggregate } from './borrower-count-aggregate.output';
import { BorrowerMinAggregate } from './borrower-min-aggregate.output';
import { BorrowerMaxAggregate } from './borrower-max-aggregate.output';
export declare class BorrowerGroupBy {
    id: string;
    name: string;
    address: string;
    email?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: BorrowerCountAggregate;
    _min?: BorrowerMinAggregate;
    _max?: BorrowerMaxAggregate;
}
