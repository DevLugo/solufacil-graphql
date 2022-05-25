import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
export declare class LoanPaymentScalarWhereWithAggregatesInput {
    AND?: Array<LoanPaymentScalarWhereWithAggregatesInput>;
    OR?: Array<LoanPaymentScalarWhereWithAggregatesInput>;
    NOT?: Array<LoanPaymentScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    amount?: DecimalWithAggregatesFilter;
    date?: DateTimeWithAggregatesFilter;
    comments?: StringNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    loanId?: StringWithAggregatesFilter;
    employeeId?: StringWithAggregatesFilter;
}
