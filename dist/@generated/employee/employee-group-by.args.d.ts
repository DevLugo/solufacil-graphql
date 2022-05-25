import { EmployeeWhereInput } from './employee-where.input';
import { EmployeeOrderByWithAggregationInput } from './employee-order-by-with-aggregation.input';
import { EmployeeScalarFieldEnum } from './employee-scalar-field.enum';
import { EmployeeScalarWhereWithAggregatesInput } from './employee-scalar-where-with-aggregates.input';
import { EmployeeCountAggregateInput } from './employee-count-aggregate.input';
import { EmployeeMinAggregateInput } from './employee-min-aggregate.input';
import { EmployeeMaxAggregateInput } from './employee-max-aggregate.input';
export declare class EmployeeGroupByArgs {
    where?: EmployeeWhereInput;
    orderBy?: Array<EmployeeOrderByWithAggregationInput>;
    by: Array<keyof typeof EmployeeScalarFieldEnum>;
    having?: EmployeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInput;
    _min?: EmployeeMinAggregateInput;
    _max?: EmployeeMaxAggregateInput;
}
