import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PhoneListRelationFilter } from '../phone/phone-list-relation-filter.input';
import { DocumentListRelationFilter } from '../document/document-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ContractListRelationFilter } from '../contract/contract-list-relation-filter.input';
import { LocalListRelationFilter } from '../local/local-list-relation-filter.input';
export declare class BorrowerWhereInput {
    AND?: Array<BorrowerWhereInput>;
    OR?: Array<BorrowerWhereInput>;
    NOT?: Array<BorrowerWhereInput>;
    id?: StringFilter;
    name?: StringFilter;
    address?: StringFilter;
    email?: StringNullableFilter;
    phones?: PhoneListRelationFilter;
    documents?: DocumentListRelationFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    Contract?: ContractListRelationFilter;
    Local?: LocalListRelationFilter;
}
