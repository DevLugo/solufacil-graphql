import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class BorrowerScalarWhereWithAggregatesInput {
    AND?: Array<BorrowerScalarWhereWithAggregatesInput>;
    OR?: Array<BorrowerScalarWhereWithAggregatesInput>;
    NOT?: Array<BorrowerScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    address?: StringWithAggregatesFilter;
    email?: StringNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
