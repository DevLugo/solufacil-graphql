import { DocumentCountAggregate } from './document-count-aggregate.output';
import { DocumentMinAggregate } from './document-min-aggregate.output';
import { DocumentMaxAggregate } from './document-max-aggregate.output';
export declare class AggregateDocument {
    _count?: DocumentCountAggregate;
    _min?: DocumentMinAggregate;
    _max?: DocumentMaxAggregate;
}
