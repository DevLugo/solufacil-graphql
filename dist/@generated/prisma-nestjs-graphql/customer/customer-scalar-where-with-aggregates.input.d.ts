import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class CustomerScalarWhereWithAggregatesInput {
    AND?: Array<CustomerScalarWhereWithAggregatesInput>;
    OR?: Array<CustomerScalarWhereWithAggregatesInput>;
    NOT?: Array<CustomerScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    logo?: StringWithAggregatesFilter;
    url?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
