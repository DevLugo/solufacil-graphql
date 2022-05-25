import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class UserScalarWhereWithAggregatesInput {
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    email?: StringWithAggregatesFilter;
    fullName?: StringWithAggregatesFilter;
    firstName?: StringWithAggregatesFilter;
    lastName?: StringWithAggregatesFilter;
    password?: StringWithAggregatesFilter;
    lastLogin?: DateTimeNullableWithAggregatesFilter;
    profilePicture?: StringNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
