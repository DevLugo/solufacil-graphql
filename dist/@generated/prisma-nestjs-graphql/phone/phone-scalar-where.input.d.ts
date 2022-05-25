import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class PhoneScalarWhereInput {
    AND?: Array<PhoneScalarWhereInput>;
    OR?: Array<PhoneScalarWhereInput>;
    NOT?: Array<PhoneScalarWhereInput>;
    id?: StringFilter;
    number?: StringFilter;
    borrowerId?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    avalId?: StringNullableFilter;
    employeeId?: StringNullableFilter;
}
