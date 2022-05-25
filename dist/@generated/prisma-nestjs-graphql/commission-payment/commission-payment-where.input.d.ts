import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { PaymentScheduleRelationFilter } from '../payment-schedule/payment-schedule-relation-filter.input';
import { LoanRelationFilter } from '../loan/loan-relation-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumCommissionPaymentStatusFilter } from '../prisma/enum-commission-payment-status-filter.input';
export declare class CommissionPaymentWhereInput {
    AND?: Array<CommissionPaymentWhereInput>;
    OR?: Array<CommissionPaymentWhereInput>;
    NOT?: Array<CommissionPaymentWhereInput>;
    id?: StringFilter;
    amount?: DecimalFilter;
    paymentSchedule?: PaymentScheduleRelationFilter;
    loan?: LoanRelationFilter;
    employee?: EmployeeRelationFilter;
    loanId?: StringNullableFilter;
    paymentScheduleId?: StringFilter;
    employeeId?: StringFilter;
    status?: EnumCommissionPaymentStatusFilter;
}
