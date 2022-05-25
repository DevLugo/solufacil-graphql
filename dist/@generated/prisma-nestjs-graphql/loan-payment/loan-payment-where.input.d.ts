import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PaymentScheduleListRelationFilter } from '../payment-schedule/payment-schedule-list-relation-filter.input';
import { LoanRelationFilter } from '../loan/loan-relation-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';
export declare class LoanPaymentWhereInput {
    AND?: Array<LoanPaymentWhereInput>;
    OR?: Array<LoanPaymentWhereInput>;
    NOT?: Array<LoanPaymentWhereInput>;
    id?: StringFilter;
    amount?: DecimalFilter;
    date?: DateTimeFilter;
    comments?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    paymentSchedules?: PaymentScheduleListRelationFilter;
    loan?: LoanRelationFilter;
    loanId?: StringFilter;
    employee?: EmployeeRelationFilter;
    employeeId?: StringFilter;
}
