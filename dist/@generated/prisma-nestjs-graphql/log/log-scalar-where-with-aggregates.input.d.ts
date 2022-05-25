import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class LogScalarWhereWithAggregatesInput {
    AND?: Array<LogScalarWhereWithAggregatesInput>;
    OR?: Array<LogScalarWhereWithAggregatesInput>;
    NOT?: Array<LogScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    requestBody?: StringWithAggregatesFilter;
    requestType?: StringWithAggregatesFilter;
    deviceType?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    systemSectionId?: StringWithAggregatesFilter;
}
