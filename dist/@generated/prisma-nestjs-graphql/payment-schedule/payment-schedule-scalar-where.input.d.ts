import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumPaymentStateFilter } from '../prisma/enum-payment-state-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
export declare class PaymentScheduleScalarWhereInput {
    AND?: Array<PaymentScheduleScalarWhereInput>;
    OR?: Array<PaymentScheduleScalarWhereInput>;
    NOT?: Array<PaymentScheduleScalarWhereInput>;
    id?: StringFilter;
    numeration?: IntFilter;
    amountToPay?: DecimalFilter;
    paidAmount?: DecimalFilter;
    returnToCapital?: DecimalFilter;
    profit?: DecimalFilter;
    status?: EnumPaymentStateFilter;
    delayed?: BoolFilter;
    dueDate?: DateTimeFilter;
    details?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    loanId?: StringFilter;
}
