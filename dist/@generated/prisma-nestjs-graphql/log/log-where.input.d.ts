import { StringFilter } from '../prisma/string-filter.input';
import { SystemSectionRelationFilter } from '../system-section/system-section-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class LogWhereInput {
    AND?: Array<LogWhereInput>;
    OR?: Array<LogWhereInput>;
    NOT?: Array<LogWhereInput>;
    id?: StringFilter;
    section?: SystemSectionRelationFilter;
    requestBody?: StringFilter;
    requestType?: StringFilter;
    deviceType?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    systemSectionId?: StringFilter;
}
