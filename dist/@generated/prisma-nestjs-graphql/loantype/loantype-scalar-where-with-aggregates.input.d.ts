import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class LoantypeScalarWhereWithAggregatesInput {
    AND?: Array<LoantypeScalarWhereWithAggregatesInput>;
    OR?: Array<LoantypeScalarWhereWithAggregatesInput>;
    NOT?: Array<LoantypeScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    weekDuration?: IntWithAggregatesFilter;
    rate?: FloatWithAggregatesFilter;
    overdueRate?: FloatWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
