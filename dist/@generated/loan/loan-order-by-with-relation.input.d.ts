import { SortOrder } from '../prisma/sort-order.enum';
import { LoanPaymentOrderByRelationAggregateInput } from '../loan-payment/loan-payment-order-by-relation-aggregate.input';
import { LoantypeOrderByWithRelationInput } from '../loantype/loantype-order-by-with-relation.input';
import { EmployeeOrderByWithRelationInput } from '../employee/employee-order-by-with-relation.input';
import { ContractOrderByWithRelationInput } from '../contract/contract-order-by-with-relation.input';
import { PaymentScheduleOrderByRelationAggregateInput } from '../payment-schedule/payment-schedule-order-by-relation-aggregate.input';
import { CommissionPaymentOrderByRelationAggregateInput } from '../commission-payment/commission-payment-order-by-relation-aggregate.input';
export declare class LoanOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    payments?: LoanPaymentOrderByRelationAggregateInput;
    weeklyPaymentAmount?: keyof typeof SortOrder;
    amountToPay?: keyof typeof SortOrder;
    loanType?: LoantypeOrderByWithRelationInput;
    signDate?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    employee?: EmployeeOrderByWithRelationInput;
    updatedAt?: keyof typeof SortOrder;
    contract?: ContractOrderByWithRelationInput;
    contractId?: keyof typeof SortOrder;
    loantypeId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
    paymentSchedule?: PaymentScheduleOrderByRelationAggregateInput;
    CommissionPayment?: CommissionPaymentOrderByRelationAggregateInput;
}
