import { UserWhereInput } from './user-where.input';
import { UserOrderByWithAggregationInput } from './user-order-by-with-aggregation.input';
import { UserScalarFieldEnum } from './user-scalar-field.enum';
import { UserScalarWhereWithAggregatesInput } from './user-scalar-where-with-aggregates.input';
import { UserCountAggregateInput } from './user-count-aggregate.input';
import { UserMinAggregateInput } from './user-min-aggregate.input';
import { UserMaxAggregateInput } from './user-max-aggregate.input';
export declare class UserGroupByArgs {
    where?: UserWhereInput;
    orderBy?: Array<UserOrderByWithAggregationInput>;
    by: Array<keyof typeof UserScalarFieldEnum>;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInput;
    _min?: UserMinAggregateInput;
    _max?: UserMaxAggregateInput;
}
