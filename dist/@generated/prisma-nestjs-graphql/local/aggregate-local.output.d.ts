import { LocalCountAggregate } from './local-count-aggregate.output';
import { LocalMinAggregate } from './local-min-aggregate.output';
import { LocalMaxAggregate } from './local-max-aggregate.output';
export declare class AggregateLocal {
    _count?: LocalCountAggregate;
    _min?: LocalMinAggregate;
    _max?: LocalMaxAggregate;
}
