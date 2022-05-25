import { SortOrder } from '../prisma/sort-order.enum';
import { LoanOrderByWithRelationInput } from '../loan/loan-order-by-with-relation.input';
import { LoanPaymentOrderByRelationAggregateInput } from '../loan-payment/loan-payment-order-by-relation-aggregate.input';
import { CommissionPaymentOrderByRelationAggregateInput } from '../commission-payment/commission-payment-order-by-relation-aggregate.input';
export declare class PaymentScheduleOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    numeration?: keyof typeof SortOrder;
    amountToPay?: keyof typeof SortOrder;
    paidAmount?: keyof typeof SortOrder;
    returnToCapital?: keyof typeof SortOrder;
    profit?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    delayed?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    details?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    loan?: LoanOrderByWithRelationInput;
    loanId?: keyof typeof SortOrder;
    loanPayments?: LoanPaymentOrderByRelationAggregateInput;
    CommissionPayment?: CommissionPaymentOrderByRelationAggregateInput;
}
