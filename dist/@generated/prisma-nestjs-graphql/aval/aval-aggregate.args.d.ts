import { AvalWhereInput } from './aval-where.input';
import { AvalOrderByWithRelationInput } from './aval-order-by-with-relation.input';
import { AvalWhereUniqueInput } from './aval-where-unique.input';
import { AvalCountAggregateInput } from './aval-count-aggregate.input';
import { AvalMinAggregateInput } from './aval-min-aggregate.input';
import { AvalMaxAggregateInput } from './aval-max-aggregate.input';
export declare class AvalAggregateArgs {
    where?: AvalWhereInput;
    orderBy?: Array<AvalOrderByWithRelationInput>;
    cursor?: AvalWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: AvalCountAggregateInput;
    _min?: AvalMinAggregateInput;
    _max?: AvalMaxAggregateInput;
}
