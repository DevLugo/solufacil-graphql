import { EmployeesTypes } from '../prisma/employees-types.enum';
export declare class EmployeeCreateManyInput {
    id?: string;
    type: keyof typeof EmployeesTypes;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
}
