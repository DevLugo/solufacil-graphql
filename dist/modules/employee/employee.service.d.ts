import { EmployeeCreateInput } from '../../@generated/employee/employee-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';
export declare class EmployeeService {
    private readonly db;
    constructor(db: PrismaService);
    create(data: EmployeeCreateInput): Promise<import(".prisma/client").Employee & {
        user: import(".prisma/client").User;
    }>;
    getManyByName(name: string): Promise<(import(".prisma/client").Employee & {
        user: import(".prisma/client").User;
    })[]>;
}
