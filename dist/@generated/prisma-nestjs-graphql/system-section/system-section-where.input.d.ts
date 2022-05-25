import { StringFilter } from '../prisma/string-filter.input';
import { LogListRelationFilter } from '../log/log-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class SystemSectionWhereInput {
    AND?: Array<SystemSectionWhereInput>;
    OR?: Array<SystemSectionWhereInput>;
    NOT?: Array<SystemSectionWhereInput>;
    id?: StringFilter;
    name?: StringFilter;
    logs?: LogListRelationFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
