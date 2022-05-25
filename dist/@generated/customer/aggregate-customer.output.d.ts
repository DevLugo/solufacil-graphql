import { CustomerCountAggregate } from './customer-count-aggregate.output';
import { CustomerMinAggregate } from './customer-min-aggregate.output';
import { CustomerMaxAggregate } from './customer-max-aggregate.output';
export declare class AggregateCustomer {
    _count?: CustomerCountAggregate;
    _min?: CustomerMinAggregate;
    _max?: CustomerMaxAggregate;
}
