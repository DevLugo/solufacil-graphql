import { SystemSectionCountAggregate } from './system-section-count-aggregate.output';
import { SystemSectionMinAggregate } from './system-section-min-aggregate.output';
import { SystemSectionMaxAggregate } from './system-section-max-aggregate.output';
export declare class SystemSectionGroupBy {
    id: string;
    name: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: SystemSectionCountAggregate;
    _min?: SystemSectionMinAggregate;
    _max?: SystemSectionMaxAggregate;
}
