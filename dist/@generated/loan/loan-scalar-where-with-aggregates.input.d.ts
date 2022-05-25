import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumLoanStateWithAggregatesFilter } from '../prisma/enum-loan-state-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class LoanScalarWhereWithAggregatesInput {
    AND?: Array<LoanScalarWhereWithAggregatesInput>;
    OR?: Array<LoanScalarWhereWithAggregatesInput>;
    NOT?: Array<LoanScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    status?: EnumLoanStateWithAggregatesFilter;
    weeklyPaymentAmount?: DecimalWithAggregatesFilter;
    amountToPay?: DecimalWithAggregatesFilter;
    signDate?: DateTimeWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    contractId?: StringWithAggregatesFilter;
    loantypeId?: StringWithAggregatesFilter;
    employeeId?: StringWithAggregatesFilter;
}
