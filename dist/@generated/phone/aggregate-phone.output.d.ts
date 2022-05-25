import { PhoneCountAggregate } from './phone-count-aggregate.output';
import { PhoneMinAggregate } from './phone-min-aggregate.output';
import { PhoneMaxAggregate } from './phone-max-aggregate.output';
export declare class AggregatePhone {
    _count?: PhoneCountAggregate;
    _min?: PhoneMinAggregate;
    _max?: PhoneMaxAggregate;
}
