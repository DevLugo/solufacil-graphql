import { StringFilter } from '../prisma/string-filter.input';
import { PhoneListRelationFilter } from '../phone/phone-list-relation-filter.input';
import { DocumentListRelationFilter } from '../document/document-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class AvalWhereInput {
    AND?: Array<AvalWhereInput>;
    OR?: Array<AvalWhereInput>;
    NOT?: Array<AvalWhereInput>;
    id?: StringFilter;
    phones?: PhoneListRelationFilter;
    email?: StringFilter;
    fullName?: StringFilter;
    firstName?: StringFilter;
    lastName?: StringFilter;
    documents?: DocumentListRelationFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
