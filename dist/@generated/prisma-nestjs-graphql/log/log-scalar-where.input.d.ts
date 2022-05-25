import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class LogScalarWhereInput {
    AND?: Array<LogScalarWhereInput>;
    OR?: Array<LogScalarWhereInput>;
    NOT?: Array<LogScalarWhereInput>;
    id?: StringFilter;
    requestBody?: StringFilter;
    requestType?: StringFilter;
    deviceType?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    systemSectionId?: StringFilter;
}
