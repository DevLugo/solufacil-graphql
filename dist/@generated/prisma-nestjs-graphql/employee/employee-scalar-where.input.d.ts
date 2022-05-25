import { StringFilter } from '../prisma/string-filter.input';
import { EnumEmployeesTypesFilter } from '../prisma/enum-employees-types-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class EmployeeScalarWhereInput {
    AND?: Array<EmployeeScalarWhereInput>;
    OR?: Array<EmployeeScalarWhereInput>;
    NOT?: Array<EmployeeScalarWhereInput>;
    id?: StringFilter;
    type?: EnumEmployeesTypesFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    userId?: StringFilter;
}
