import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BorrowerRelationFilter } from '../borrower/borrower-relation-filter.input';
export declare class LocalWhereInput {
    AND?: Array<LocalWhereInput>;
    OR?: Array<LocalWhereInput>;
    NOT?: Array<LocalWhereInput>;
    id?: StringFilter;
    name?: StringFilter;
    address?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    borrower?: BorrowerRelationFilter;
    borrowerId?: StringFilter;
}
