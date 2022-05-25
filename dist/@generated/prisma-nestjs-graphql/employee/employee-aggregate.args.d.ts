import { EmployeeWhereInput } from './employee-where.input';
import { EmployeeOrderByWithRelationInput } from './employee-order-by-with-relation.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCountAggregateInput } from './employee-count-aggregate.input';
import { EmployeeMinAggregateInput } from './employee-min-aggregate.input';
import { EmployeeMaxAggregateInput } from './employee-max-aggregate.input';
export declare class EmployeeAggregateArgs {
    where?: EmployeeWhereInput;
    orderBy?: Array<EmployeeOrderByWithRelationInput>;
    cursor?: EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInput;
    _min?: EmployeeMinAggregateInput;
    _max?: EmployeeMaxAggregateInput;
}
