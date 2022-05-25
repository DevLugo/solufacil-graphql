import { LogCountAggregate } from './log-count-aggregate.output';
import { LogMinAggregate } from './log-min-aggregate.output';
import { LogMaxAggregate } from './log-max-aggregate.output';
export declare class AggregateLog {
    _count?: LogCountAggregate;
    _min?: LogMinAggregate;
    _max?: LogMaxAggregate;
}
