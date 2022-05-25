import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { EnumPaymentStateWithAggregatesFilter } from '../prisma/enum-payment-state-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
export declare class PaymentScheduleScalarWhereWithAggregatesInput {
    AND?: Array<PaymentScheduleScalarWhereWithAggregatesInput>;
    OR?: Array<PaymentScheduleScalarWhereWithAggregatesInput>;
    NOT?: Array<PaymentScheduleScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    numeration?: IntWithAggregatesFilter;
    amountToPay?: DecimalWithAggregatesFilter;
    paidAmount?: DecimalWithAggregatesFilter;
    returnToCapital?: DecimalWithAggregatesFilter;
    profit?: DecimalWithAggregatesFilter;
    status?: EnumPaymentStateWithAggregatesFilter;
    delayed?: BoolWithAggregatesFilter;
    dueDate?: DateTimeWithAggregatesFilter;
    details?: StringNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    loanId?: StringWithAggregatesFilter;
}
