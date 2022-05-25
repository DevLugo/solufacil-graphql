import { EmployeesTypes } from '../prisma/employees-types.enum';
import { EmployeeCountAggregate } from './employee-count-aggregate.output';
import { EmployeeMinAggregate } from './employee-min-aggregate.output';
import { EmployeeMaxAggregate } from './employee-max-aggregate.output';
export declare class EmployeeGroupBy {
    id: string;
    type: keyof typeof EmployeesTypes;
    createdAt: Date | string;
    updatedAt: Date | string;
    userId: string;
    _count?: EmployeeCountAggregate;
    _min?: EmployeeMinAggregate;
    _max?: EmployeeMaxAggregate;
}
