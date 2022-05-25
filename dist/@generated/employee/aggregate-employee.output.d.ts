import { EmployeeCountAggregate } from './employee-count-aggregate.output';
import { EmployeeMinAggregate } from './employee-min-aggregate.output';
import { EmployeeMaxAggregate } from './employee-max-aggregate.output';
export declare class AggregateEmployee {
    _count?: EmployeeCountAggregate;
    _min?: EmployeeMinAggregate;
    _max?: EmployeeMaxAggregate;
}
