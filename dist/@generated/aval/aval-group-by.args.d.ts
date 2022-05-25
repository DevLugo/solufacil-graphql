import { AvalWhereInput } from './aval-where.input';
import { AvalOrderByWithAggregationInput } from './aval-order-by-with-aggregation.input';
import { AvalScalarFieldEnum } from './aval-scalar-field.enum';
import { AvalScalarWhereWithAggregatesInput } from './aval-scalar-where-with-aggregates.input';
import { AvalCountAggregateInput } from './aval-count-aggregate.input';
import { AvalMinAggregateInput } from './aval-min-aggregate.input';
import { AvalMaxAggregateInput } from './aval-max-aggregate.input';
export declare class AvalGroupByArgs {
    where?: AvalWhereInput;
    orderBy?: Array<AvalOrderByWithAggregationInput>;
    by: Array<keyof typeof AvalScalarFieldEnum>;
    having?: AvalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AvalCountAggregateInput;
    _min?: AvalMinAggregateInput;
    _max?: AvalMaxAggregateInput;
}
