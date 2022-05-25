import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class AvalScalarWhereWithAggregatesInput {
    AND?: Array<AvalScalarWhereWithAggregatesInput>;
    OR?: Array<AvalScalarWhereWithAggregatesInput>;
    NOT?: Array<AvalScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    email?: StringWithAggregatesFilter;
    fullName?: StringWithAggregatesFilter;
    firstName?: StringWithAggregatesFilter;
    lastName?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
