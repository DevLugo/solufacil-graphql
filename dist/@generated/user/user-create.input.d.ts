import { EmployeeCreateNestedManyWithoutUserInput } from '../employee/employee-create-nested-many-without-user.input';
export declare class UserCreateInput {
    id?: string;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    password: string;
    lastLogin?: Date | string;
    profilePicture?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Employee?: EmployeeCreateNestedManyWithoutUserInput;
}
