import { StringFilter } from '../prisma/string-filter.input';
import { EnumLoanStateFilter } from '../prisma/enum-loan-state-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class LoanScalarWhereInput {
    AND?: Array<LoanScalarWhereInput>;
    OR?: Array<LoanScalarWhereInput>;
    NOT?: Array<LoanScalarWhereInput>;
    id?: StringFilter;
    status?: EnumLoanStateFilter;
    weeklyPaymentAmount?: DecimalFilter;
    amountToPay?: DecimalFilter;
    signDate?: DateTimeFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    contractId?: StringFilter;
    loantypeId?: StringFilter;
    employeeId?: StringFilter;
}
