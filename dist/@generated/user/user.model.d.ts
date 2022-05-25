import { Employee } from '../employee/employee.model';
import { UserCount } from './user-count.output';
export declare class User {
    id: string;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    password: string;
    lastLogin: Date | null;
    profilePicture: string | null;
    createdAt: Date;
    updatedAt: Date;
    Employee?: Array<Employee>;
    _count?: UserCount;
}
