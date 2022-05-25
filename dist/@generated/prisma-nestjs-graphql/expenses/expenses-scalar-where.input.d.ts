import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumPaymentStateFilter } from '../prisma/enum-payment-state-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
export declare class ExpensesScalarWhereInput {
    AND?: Array<ExpensesScalarWhereInput>;
    OR?: Array<ExpensesScalarWhereInput>;
    NOT?: Array<ExpensesScalarWhereInput>;
    id?: StringFilter;
    amountToPay?: DecimalFilter;
    status?: EnumPaymentStateFilter;
    dueDate?: DateTimeFilter;
    payedAt?: DateTimeFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    userId?: StringNullableFilter;
    employeeId?: StringFilter;
}
