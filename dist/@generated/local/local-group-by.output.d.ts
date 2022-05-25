import { LocalCountAggregate } from './local-count-aggregate.output';
import { LocalMinAggregate } from './local-min-aggregate.output';
import { LocalMaxAggregate } from './local-max-aggregate.output';
export declare class LocalGroupBy {
    id: string;
    name: string;
    address: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    borrowerId: string;
    _count?: LocalCountAggregate;
    _min?: LocalMinAggregate;
    _max?: LocalMaxAggregate;
}
