import { LoantypeWhereInput } from './loantype-where.input';
import { LoantypeOrderByWithRelationInput } from './loantype-order-by-with-relation.input';
import { LoantypeWhereUniqueInput } from './loantype-where-unique.input';
import { LoantypeCountAggregateInput } from './loantype-count-aggregate.input';
import { LoantypeAvgAggregateInput } from './loantype-avg-aggregate.input';
import { LoantypeSumAggregateInput } from './loantype-sum-aggregate.input';
import { LoantypeMinAggregateInput } from './loantype-min-aggregate.input';
import { LoantypeMaxAggregateInput } from './loantype-max-aggregate.input';
export declare class LoantypeAggregateArgs {
    where?: LoantypeWhereInput;
    orderBy?: Array<LoantypeOrderByWithRelationInput>;
    cursor?: LoantypeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: LoantypeCountAggregateInput;
    _avg?: LoantypeAvgAggregateInput;
    _sum?: LoantypeSumAggregateInput;
    _min?: LoantypeMinAggregateInput;
    _max?: LoantypeMaxAggregateInput;
}
