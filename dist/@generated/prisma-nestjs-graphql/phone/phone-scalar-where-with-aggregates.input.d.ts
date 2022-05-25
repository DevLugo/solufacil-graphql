import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class PhoneScalarWhereWithAggregatesInput {
    AND?: Array<PhoneScalarWhereWithAggregatesInput>;
    OR?: Array<PhoneScalarWhereWithAggregatesInput>;
    NOT?: Array<PhoneScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    number?: StringWithAggregatesFilter;
    borrowerId?: StringNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    avalId?: StringNullableWithAggregatesFilter;
    employeeId?: StringNullableWithAggregatesFilter;
}
