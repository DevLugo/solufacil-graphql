import { LogWhereInput } from './log-where.input';
import { LogOrderByWithAggregationInput } from './log-order-by-with-aggregation.input';
import { LogScalarFieldEnum } from './log-scalar-field.enum';
import { LogScalarWhereWithAggregatesInput } from './log-scalar-where-with-aggregates.input';
import { LogCountAggregateInput } from './log-count-aggregate.input';
import { LogMinAggregateInput } from './log-min-aggregate.input';
import { LogMaxAggregateInput } from './log-max-aggregate.input';
export declare class LogGroupByArgs {
    where?: LogWhereInput;
    orderBy?: Array<LogOrderByWithAggregationInput>;
    by: Array<keyof typeof LogScalarFieldEnum>;
    having?: LogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LogCountAggregateInput;
    _min?: LogMinAggregateInput;
    _max?: LogMaxAggregateInput;
}
