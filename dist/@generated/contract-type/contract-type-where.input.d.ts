import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ContractListRelationFilter } from '../contract/contract-list-relation-filter.input';
export declare class ContractTypeWhereInput {
    AND?: Array<ContractTypeWhereInput>;
    OR?: Array<ContractTypeWhereInput>;
    NOT?: Array<ContractTypeWhereInput>;
    id?: StringFilter;
    name?: StringFilter;
    monthDuration?: IntFilter;
    amount?: DecimalFilter;
    maxRate?: DecimalFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeNullableFilter;
    contract?: ContractListRelationFilter;
}
