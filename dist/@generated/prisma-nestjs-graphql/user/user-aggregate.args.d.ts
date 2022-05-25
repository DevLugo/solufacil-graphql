import { UserWhereInput } from './user-where.input';
import { UserOrderByWithRelationInput } from './user-order-by-with-relation.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCountAggregateInput } from './user-count-aggregate.input';
import { UserMinAggregateInput } from './user-min-aggregate.input';
import { UserMaxAggregateInput } from './user-max-aggregate.input';
export declare class UserAggregateArgs {
    where?: UserWhereInput;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInput;
    _min?: UserMinAggregateInput;
    _max?: UserMaxAggregateInput;
}
