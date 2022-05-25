import { LocalWhereInput } from './local-where.input';
import { LocalOrderByWithRelationInput } from './local-order-by-with-relation.input';
import { LocalWhereUniqueInput } from './local-where-unique.input';
import { LocalCountAggregateInput } from './local-count-aggregate.input';
import { LocalMinAggregateInput } from './local-min-aggregate.input';
import { LocalMaxAggregateInput } from './local-max-aggregate.input';
export declare class LocalAggregateArgs {
    where?: LocalWhereInput;
    orderBy?: Array<LocalOrderByWithRelationInput>;
    cursor?: LocalWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: LocalCountAggregateInput;
    _min?: LocalMinAggregateInput;
    _max?: LocalMaxAggregateInput;
}
