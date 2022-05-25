import { BorrowerWhereInput } from './borrower-where.input';
import { BorrowerOrderByWithAggregationInput } from './borrower-order-by-with-aggregation.input';
import { BorrowerScalarFieldEnum } from './borrower-scalar-field.enum';
import { BorrowerScalarWhereWithAggregatesInput } from './borrower-scalar-where-with-aggregates.input';
import { BorrowerCountAggregateInput } from './borrower-count-aggregate.input';
import { BorrowerMinAggregateInput } from './borrower-min-aggregate.input';
import { BorrowerMaxAggregateInput } from './borrower-max-aggregate.input';
export declare class BorrowerGroupByArgs {
    where?: BorrowerWhereInput;
    orderBy?: Array<BorrowerOrderByWithAggregationInput>;
    by: Array<keyof typeof BorrowerScalarFieldEnum>;
    having?: BorrowerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BorrowerCountAggregateInput;
    _min?: BorrowerMinAggregateInput;
    _max?: BorrowerMaxAggregateInput;
}
