import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class ContractScalarWhereWithAggregatesInput {
    AND?: Array<ContractScalarWhereWithAggregatesInput>;
    OR?: Array<ContractScalarWhereWithAggregatesInput>;
    NOT?: Array<ContractScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    borrowerId?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    dueDate?: DateTimeWithAggregatesFilter;
    signDate?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    contractTypeId?: StringWithAggregatesFilter;
    loanLeadId?: StringWithAggregatesFilter;
    employeeId?: StringWithAggregatesFilter;
}
