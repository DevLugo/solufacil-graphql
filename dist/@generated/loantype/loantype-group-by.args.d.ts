import { LoantypeWhereInput } from './loantype-where.input';
import { LoantypeOrderByWithAggregationInput } from './loantype-order-by-with-aggregation.input';
import { LoantypeScalarFieldEnum } from './loantype-scalar-field.enum';
import { LoantypeScalarWhereWithAggregatesInput } from './loantype-scalar-where-with-aggregates.input';
import { LoantypeCountAggregateInput } from './loantype-count-aggregate.input';
import { LoantypeAvgAggregateInput } from './loantype-avg-aggregate.input';
import { LoantypeSumAggregateInput } from './loantype-sum-aggregate.input';
import { LoantypeMinAggregateInput } from './loantype-min-aggregate.input';
import { LoantypeMaxAggregateInput } from './loantype-max-aggregate.input';
export declare class LoantypeGroupByArgs {
    where?: LoantypeWhereInput;
    orderBy?: Array<LoantypeOrderByWithAggregationInput>;
    by: Array<keyof typeof LoantypeScalarFieldEnum>;
    having?: LoantypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoantypeCountAggregateInput;
    _avg?: LoantypeAvgAggregateInput;
    _sum?: LoantypeSumAggregateInput;
    _min?: LoantypeMinAggregateInput;
    _max?: LoantypeMaxAggregateInput;
}
