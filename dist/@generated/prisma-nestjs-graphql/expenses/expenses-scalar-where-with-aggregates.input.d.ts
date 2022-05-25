import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { EnumPaymentStateWithAggregatesFilter } from '../prisma/enum-payment-state-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
export declare class ExpensesScalarWhereWithAggregatesInput {
    AND?: Array<ExpensesScalarWhereWithAggregatesInput>;
    OR?: Array<ExpensesScalarWhereWithAggregatesInput>;
    NOT?: Array<ExpensesScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    amountToPay?: DecimalWithAggregatesFilter;
    status?: EnumPaymentStateWithAggregatesFilter;
    dueDate?: DateTimeWithAggregatesFilter;
    payedAt?: DateTimeWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    userId?: StringNullableWithAggregatesFilter;
    employeeId?: StringWithAggregatesFilter;
}
