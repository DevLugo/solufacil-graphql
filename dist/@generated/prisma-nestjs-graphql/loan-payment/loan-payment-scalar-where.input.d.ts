import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
export declare class LoanPaymentScalarWhereInput {
    AND?: Array<LoanPaymentScalarWhereInput>;
    OR?: Array<LoanPaymentScalarWhereInput>;
    NOT?: Array<LoanPaymentScalarWhereInput>;
    id?: StringFilter;
    amount?: DecimalFilter;
    date?: DateTimeFilter;
    comments?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    loanId?: StringFilter;
    employeeId?: StringFilter;
}
