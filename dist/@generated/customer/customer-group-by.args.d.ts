import { CustomerWhereInput } from './customer-where.input';
import { CustomerOrderByWithAggregationInput } from './customer-order-by-with-aggregation.input';
import { CustomerScalarFieldEnum } from './customer-scalar-field.enum';
import { CustomerScalarWhereWithAggregatesInput } from './customer-scalar-where-with-aggregates.input';
import { CustomerCountAggregateInput } from './customer-count-aggregate.input';
import { CustomerMinAggregateInput } from './customer-min-aggregate.input';
import { CustomerMaxAggregateInput } from './customer-max-aggregate.input';
export declare class CustomerGroupByArgs {
    where?: CustomerWhereInput;
    orderBy?: Array<CustomerOrderByWithAggregationInput>;
    by: Array<keyof typeof CustomerScalarFieldEnum>;
    having?: CustomerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInput;
    _min?: CustomerMinAggregateInput;
    _max?: CustomerMaxAggregateInput;
}
