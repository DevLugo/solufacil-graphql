import { SystemSectionWhereInput } from './system-section-where.input';
import { SystemSectionOrderByWithAggregationInput } from './system-section-order-by-with-aggregation.input';
import { SystemSectionScalarFieldEnum } from './system-section-scalar-field.enum';
import { SystemSectionScalarWhereWithAggregatesInput } from './system-section-scalar-where-with-aggregates.input';
import { SystemSectionCountAggregateInput } from './system-section-count-aggregate.input';
import { SystemSectionMinAggregateInput } from './system-section-min-aggregate.input';
import { SystemSectionMaxAggregateInput } from './system-section-max-aggregate.input';
export declare class SystemSectionGroupByArgs {
    where?: SystemSectionWhereInput;
    orderBy?: Array<SystemSectionOrderByWithAggregationInput>;
    by: Array<keyof typeof SystemSectionScalarFieldEnum>;
    having?: SystemSectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SystemSectionCountAggregateInput;
    _min?: SystemSectionMinAggregateInput;
    _max?: SystemSectionMaxAggregateInput;
}
