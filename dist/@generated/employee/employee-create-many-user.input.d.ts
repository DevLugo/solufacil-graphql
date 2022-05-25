import { EmployeesTypes } from '../prisma/employees-types.enum';
export declare class EmployeeCreateManyUserInput {
    id?: string;
    type: keyof typeof EmployeesTypes;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
