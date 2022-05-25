import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EmployeeListRelationFilter } from '../employee/employee-list-relation-filter.input';
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: StringFilter;
    email?: StringFilter;
    fullName?: StringFilter;
    firstName?: StringFilter;
    lastName?: StringFilter;
    password?: StringFilter;
    lastLogin?: DateTimeNullableFilter;
    profilePicture?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    Employee?: EmployeeListRelationFilter;
}
