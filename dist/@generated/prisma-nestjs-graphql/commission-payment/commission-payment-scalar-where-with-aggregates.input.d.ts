import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumCommissionPaymentStatusWithAggregatesFilter } from '../prisma/enum-commission-payment-status-with-aggregates-filter.input';
export declare class CommissionPaymentScalarWhereWithAggregatesInput {
    AND?: Array<CommissionPaymentScalarWhereWithAggregatesInput>;
    OR?: Array<CommissionPaymentScalarWhereWithAggregatesInput>;
    NOT?: Array<CommissionPaymentScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    amount?: DecimalWithAggregatesFilter;
    loanId?: StringNullableWithAggregatesFilter;
    paymentScheduleId?: StringWithAggregatesFilter;
    employeeId?: StringWithAggregatesFilter;
    status?: EnumCommissionPaymentStatusWithAggregatesFilter;
}
