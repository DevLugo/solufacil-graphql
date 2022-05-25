import { PhoneWhereInput } from './phone-where.input';
import { PhoneOrderByWithRelationInput } from './phone-order-by-with-relation.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneCountAggregateInput } from './phone-count-aggregate.input';
import { PhoneMinAggregateInput } from './phone-min-aggregate.input';
import { PhoneMaxAggregateInput } from './phone-max-aggregate.input';
export declare class PhoneAggregateArgs {
    where?: PhoneWhereInput;
    orderBy?: Array<PhoneOrderByWithRelationInput>;
    cursor?: PhoneWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: PhoneCountAggregateInput;
    _min?: PhoneMinAggregateInput;
    _max?: PhoneMaxAggregateInput;
}
