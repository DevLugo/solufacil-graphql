import { CustomerWhereInput } from './customer-where.input';
import { CustomerOrderByWithRelationInput } from './customer-order-by-with-relation.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerCountAggregateInput } from './customer-count-aggregate.input';
import { CustomerMinAggregateInput } from './customer-min-aggregate.input';
import { CustomerMaxAggregateInput } from './customer-max-aggregate.input';
export declare class CustomerAggregateArgs {
    where?: CustomerWhereInput;
    orderBy?: Array<CustomerOrderByWithRelationInput>;
    cursor?: CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInput;
    _min?: CustomerMinAggregateInput;
    _max?: CustomerMaxAggregateInput;
}
