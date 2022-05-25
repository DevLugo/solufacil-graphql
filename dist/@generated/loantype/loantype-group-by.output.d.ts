import { LoantypeCountAggregate } from './loantype-count-aggregate.output';
import { LoantypeAvgAggregate } from './loantype-avg-aggregate.output';
import { LoantypeSumAggregate } from './loantype-sum-aggregate.output';
import { LoantypeMinAggregate } from './loantype-min-aggregate.output';
import { LoantypeMaxAggregate } from './loantype-max-aggregate.output';
export declare class LoantypeGroupBy {
    id: string;
    name: string;
    weekDuration: number;
    rate: number;
    overdueRate: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: LoantypeCountAggregate;
    _avg?: LoantypeAvgAggregate;
    _sum?: LoantypeSumAggregate;
    _min?: LoantypeMinAggregate;
    _max?: LoantypeMaxAggregate;
}
