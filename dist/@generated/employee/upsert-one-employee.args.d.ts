import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateInput } from './employee-create.input';
import { EmployeeUpdateInput } from './employee-update.input';
export declare class UpsertOneEmployeeArgs {
    where: EmployeeWhereUniqueInput;
    create: EmployeeCreateInput;
    update: EmployeeUpdateInput;
}
