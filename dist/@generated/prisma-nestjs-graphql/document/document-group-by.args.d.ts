import { DocumentWhereInput } from './document-where.input';
import { DocumentOrderByWithAggregationInput } from './document-order-by-with-aggregation.input';
import { DocumentScalarFieldEnum } from './document-scalar-field.enum';
import { DocumentScalarWhereWithAggregatesInput } from './document-scalar-where-with-aggregates.input';
import { DocumentCountAggregateInput } from './document-count-aggregate.input';
import { DocumentMinAggregateInput } from './document-min-aggregate.input';
import { DocumentMaxAggregateInput } from './document-max-aggregate.input';
export declare class DocumentGroupByArgs {
    where?: DocumentWhereInput;
    orderBy?: Array<DocumentOrderByWithAggregationInput>;
    by: Array<keyof typeof DocumentScalarFieldEnum>;
    having?: DocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentCountAggregateInput;
    _min?: DocumentMinAggregateInput;
    _max?: DocumentMaxAggregateInput;
}
