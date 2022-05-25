import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class LocalScalarWhereWithAggregatesInput {
    AND?: Array<LocalScalarWhereWithAggregatesInput>;
    OR?: Array<LocalScalarWhereWithAggregatesInput>;
    NOT?: Array<LocalScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    address?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    borrowerId?: StringWithAggregatesFilter;
}
