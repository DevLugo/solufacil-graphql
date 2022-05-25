import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumEmployeesTypesWithAggregatesFilter } from '../prisma/enum-employees-types-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class EmployeeScalarWhereWithAggregatesInput {
    AND?: Array<EmployeeScalarWhereWithAggregatesInput>;
    OR?: Array<EmployeeScalarWhereWithAggregatesInput>;
    NOT?: Array<EmployeeScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    type?: EnumEmployeesTypesWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    userId?: StringWithAggregatesFilter;
}
