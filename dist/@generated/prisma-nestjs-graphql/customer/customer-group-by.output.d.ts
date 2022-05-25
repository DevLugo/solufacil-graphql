import { CustomerCountAggregate } from './customer-count-aggregate.output';
import { CustomerMinAggregate } from './customer-min-aggregate.output';
import { CustomerMaxAggregate } from './customer-max-aggregate.output';
export declare class CustomerGroupBy {
    id: string;
    name: string;
    logo: string;
    url: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: CustomerCountAggregate;
    _min?: CustomerMinAggregate;
    _max?: CustomerMaxAggregate;
}
