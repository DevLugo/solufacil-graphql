import { LocalWhereInput } from './local-where.input';
import { LocalOrderByWithAggregationInput } from './local-order-by-with-aggregation.input';
import { LocalScalarFieldEnum } from './local-scalar-field.enum';
import { LocalScalarWhereWithAggregatesInput } from './local-scalar-where-with-aggregates.input';
import { LocalCountAggregateInput } from './local-count-aggregate.input';
import { LocalMinAggregateInput } from './local-min-aggregate.input';
import { LocalMaxAggregateInput } from './local-max-aggregate.input';
export declare class LocalGroupByArgs {
    where?: LocalWhereInput;
    orderBy?: Array<LocalOrderByWithAggregationInput>;
    by: Array<keyof typeof LocalScalarFieldEnum>;
    having?: LocalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LocalCountAggregateInput;
    _min?: LocalMinAggregateInput;
    _max?: LocalMaxAggregateInput;
}
