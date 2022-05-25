import { EmployeeUncheckedCreateNestedManyWithoutUserInput } from '../employee/employee-unchecked-create-nested-many-without-user.input';
export declare class UserUncheckedCreateInput {
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
    Employee?: EmployeeUncheckedCreateNestedManyWithoutUserInput;
}
