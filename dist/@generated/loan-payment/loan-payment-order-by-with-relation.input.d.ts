import { SortOrder } from '../prisma/sort-order.enum';
import { PaymentScheduleOrderByRelationAggregateInput } from '../payment-schedule/payment-schedule-order-by-relation-aggregate.input';
import { LoanOrderByWithRelationInput } from '../loan/loan-order-by-with-relation.input';
import { EmployeeOrderByWithRelationInput } from '../employee/employee-order-by-with-relation.input';
export declare class LoanPaymentOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    date?: keyof typeof SortOrder;
    comments?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    paymentSchedules?: PaymentScheduleOrderByRelationAggregateInput;
    loan?: LoanOrderByWithRelationInput;
    loanId?: keyof typeof SortOrder;
    employee?: EmployeeOrderByWithRelationInput;
    employeeId?: keyof typeof SortOrder;
}
