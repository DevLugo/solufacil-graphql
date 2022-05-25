import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class LocalScalarWhereInput {
    AND?: Array<LocalScalarWhereInput>;
    OR?: Array<LocalScalarWhereInput>;
    NOT?: Array<LocalScalarWhereInput>;
    id?: StringFilter;
    name?: StringFilter;
    address?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    borrowerId?: StringFilter;
}
