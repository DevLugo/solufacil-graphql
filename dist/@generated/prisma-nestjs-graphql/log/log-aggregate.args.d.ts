import { LogWhereInput } from './log-where.input';
import { LogOrderByWithRelationInput } from './log-order-by-with-relation.input';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { LogCountAggregateInput } from './log-count-aggregate.input';
import { LogMinAggregateInput } from './log-min-aggregate.input';
import { LogMaxAggregateInput } from './log-max-aggregate.input';
export declare class LogAggregateArgs {
    where?: LogWhereInput;
    orderBy?: Array<LogOrderByWithRelationInput>;
    cursor?: LogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: LogCountAggregateInput;
    _min?: LogMinAggregateInput;
    _max?: LogMaxAggregateInput;
}
