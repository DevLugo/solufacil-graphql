import { BorrowerWhereInput } from './borrower-where.input';
import { BorrowerOrderByWithRelationInput } from './borrower-order-by-with-relation.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerCountAggregateInput } from './borrower-count-aggregate.input';
import { BorrowerMinAggregateInput } from './borrower-min-aggregate.input';
import { BorrowerMaxAggregateInput } from './borrower-max-aggregate.input';
export declare class BorrowerAggregateArgs {
    where?: BorrowerWhereInput;
    orderBy?: Array<BorrowerOrderByWithRelationInput>;
    cursor?: BorrowerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: BorrowerCountAggregateInput;
    _min?: BorrowerMinAggregateInput;
    _max?: BorrowerMaxAggregateInput;
}
