import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumPaymentStateFilter } from '../prisma/enum-payment-state-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
export declare class ExpensesWhereInput {
    AND?: Array<ExpensesWhereInput>;
    OR?: Array<ExpensesWhereInput>;
    NOT?: Array<ExpensesWhereInput>;
    id?: StringFilter;
    amountToPay?: DecimalFilter;
    status?: EnumPaymentStateFilter;
    dueDate?: DateTimeFilter;
    payedAt?: DateTimeFilter;
    employee?: EmployeeRelationFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    userId?: StringNullableFilter;
    employeeId?: StringFilter;
}
