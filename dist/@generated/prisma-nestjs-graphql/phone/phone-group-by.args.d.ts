import { PhoneWhereInput } from './phone-where.input';
import { PhoneOrderByWithAggregationInput } from './phone-order-by-with-aggregation.input';
import { PhoneScalarFieldEnum } from './phone-scalar-field.enum';
import { PhoneScalarWhereWithAggregatesInput } from './phone-scalar-where-with-aggregates.input';
import { PhoneCountAggregateInput } from './phone-count-aggregate.input';
import { PhoneMinAggregateInput } from './phone-min-aggregate.input';
import { PhoneMaxAggregateInput } from './phone-max-aggregate.input';
export declare class PhoneGroupByArgs {
    where?: PhoneWhereInput;
    orderBy?: Array<PhoneOrderByWithAggregationInput>;
    by: Array<keyof typeof PhoneScalarFieldEnum>;
    having?: PhoneScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PhoneCountAggregateInput;
    _min?: PhoneMinAggregateInput;
    _max?: PhoneMaxAggregateInput;
}
