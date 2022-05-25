import { SortOrder } from '../prisma/sort-order.enum';
import { PaymentScheduleOrderByWithRelationInput } from '../payment-schedule/payment-schedule-order-by-with-relation.input';
import { LoanOrderByWithRelationInput } from '../loan/loan-order-by-with-relation.input';
import { EmployeeOrderByWithRelationInput } from '../employee/employee-order-by-with-relation.input';
export declare class CommissionPaymentOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    paymentSchedule?: PaymentScheduleOrderByWithRelationInput;
    loan?: LoanOrderByWithRelationInput;
    employee?: EmployeeOrderByWithRelationInput;
    loanId?: keyof typeof SortOrder;
    paymentScheduleId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
}
