import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
export declare class AggregateUser {
    _count?: UserCountAggregate;
    _min?: UserMinAggregate;
    _max?: UserMaxAggregate;
}
