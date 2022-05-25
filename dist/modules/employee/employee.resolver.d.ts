import { EmployeeCreateInput } from '../../@generated/employee/employee-create.input';
import { EmployeeService } from './employee.service';
export declare class EmployeeResolver {
    private readonly EmployeeService;
    constructor(EmployeeService: EmployeeService);
    employees(name: string): Promise<(import(".prisma/client").Employee & {
        user: import(".prisma/client").User;
    })[]>;
    createEmployee(data: EmployeeCreateInput): Promise<import(".prisma/client").Employee & {
        user: import(".prisma/client").User;
    }>;
}
