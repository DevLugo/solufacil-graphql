import { StringFilter } from '../prisma/string-filter.input';
import { BorrowerRelationFilter } from '../borrower/borrower-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AvalRelationFilter } from '../aval/aval-relation-filter.input';
export declare class PhoneWhereInput {
    AND?: Array<PhoneWhereInput>;
    OR?: Array<PhoneWhereInput>;
    NOT?: Array<PhoneWhereInput>;
    id?: StringFilter;
    number?: StringFilter;
    Borrower?: BorrowerRelationFilter;
    borrowerId?: StringNullableFilter;
    Employee?: EmployeeRelationFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    aval?: AvalRelationFilter;
    avalId?: StringNullableFilter;
    employeeId?: StringNullableFilter;
}
