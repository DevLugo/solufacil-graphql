import { SystemSectionWhereInput } from './system-section-where.input';
import { SystemSectionOrderByWithRelationInput } from './system-section-order-by-with-relation.input';
import { SystemSectionWhereUniqueInput } from './system-section-where-unique.input';
import { SystemSectionCountAggregateInput } from './system-section-count-aggregate.input';
import { SystemSectionMinAggregateInput } from './system-section-min-aggregate.input';
import { SystemSectionMaxAggregateInput } from './system-section-max-aggregate.input';
export declare class SystemSectionAggregateArgs {
    where?: SystemSectionWhereInput;
    orderBy?: Array<SystemSectionOrderByWithRelationInput>;
    cursor?: SystemSectionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: SystemSectionCountAggregateInput;
    _min?: SystemSectionMinAggregateInput;
    _max?: SystemSectionMaxAggregateInput;
}
