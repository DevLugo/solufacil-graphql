import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
export declare class ContractTypeScalarWhereWithAggregatesInput {
    AND?: Array<ContractTypeScalarWhereWithAggregatesInput>;
    OR?: Array<ContractTypeScalarWhereWithAggregatesInput>;
    NOT?: Array<ContractTypeScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    monthDuration?: IntWithAggregatesFilter;
    amount?: DecimalWithAggregatesFilter;
    maxRate?: DecimalWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeNullableWithAggregatesFilter;
}
