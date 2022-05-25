import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumCommissionPaymentStatusFilter } from '../prisma/enum-commission-payment-status-filter.input';
export declare class CommissionPaymentScalarWhereInput {
    AND?: Array<CommissionPaymentScalarWhereInput>;
    OR?: Array<CommissionPaymentScalarWhereInput>;
    NOT?: Array<CommissionPaymentScalarWhereInput>;
    id?: StringFilter;
    amount?: DecimalFilter;
    loanId?: StringNullableFilter;
    paymentScheduleId?: StringFilter;
    employeeId?: StringFilter;
    status?: EnumCommissionPaymentStatusFilter;
}
