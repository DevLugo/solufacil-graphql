import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class SystemSectionScalarWhereWithAggregatesInput {
    AND?: Array<SystemSectionScalarWhereWithAggregatesInput>;
    OR?: Array<SystemSectionScalarWhereWithAggregatesInput>;
    NOT?: Array<SystemSectionScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
