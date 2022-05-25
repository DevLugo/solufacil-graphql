import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class CustomerWhereInput {
    AND?: Array<CustomerWhereInput>;
    OR?: Array<CustomerWhereInput>;
    NOT?: Array<CustomerWhereInput>;
    id?: StringFilter;
    name?: StringFilter;
    logo?: StringFilter;
    url?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
