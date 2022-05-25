import { DocumentWhereInput } from './document-where.input';
import { DocumentOrderByWithRelationInput } from './document-order-by-with-relation.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentCountAggregateInput } from './document-count-aggregate.input';
import { DocumentMinAggregateInput } from './document-min-aggregate.input';
import { DocumentMaxAggregateInput } from './document-max-aggregate.input';
export declare class DocumentAggregateArgs {
    where?: DocumentWhereInput;
    orderBy?: Array<DocumentOrderByWithRelationInput>;
    cursor?: DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: DocumentCountAggregateInput;
    _min?: DocumentMinAggregateInput;
    _max?: DocumentMaxAggregateInput;
}
