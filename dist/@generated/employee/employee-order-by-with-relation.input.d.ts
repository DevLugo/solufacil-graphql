import { SortOrder } from '../prisma/sort-order.enum';
import { PhoneOrderByRelationAggregateInput } from '../phone/phone-order-by-relation-aggregate.input';
import { DocumentOrderByRelationAggregateInput } from '../document/document-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { LoanOrderByRelationAggregateInput } from '../loan/loan-order-by-relation-aggregate.input';
import { LoanPaymentOrderByRelationAggregateInput } from '../loan-payment/loan-payment-order-by-relation-aggregate.input';
import { CommissionPaymentOrderByRelationAggregateInput } from '../commission-payment/commission-payment-order-by-relation-aggregate.input';
import { ContractOrderByRelationAggregateInput } from '../contract/contract-order-by-relation-aggregate.input';
import { ExpensesOrderByRelationAggregateInput } from '../expenses/expenses-order-by-relation-aggregate.input';
export declare class EmployeeOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    phones?: PhoneOrderByRelationAggregateInput;
    documents?: DocumentOrderByRelationAggregateInput;
    user?: UserOrderByWithRelationInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    loan?: LoanOrderByRelationAggregateInput;
    userId?: keyof typeof SortOrder;
    loanPayment?: LoanPaymentOrderByRelationAggregateInput;
    commissionPayment?: CommissionPaymentOrderByRelationAggregateInput;
    contractEmployee?: ContractOrderByRelationAggregateInput;
    contractLoanLead?: ContractOrderByRelationAggregateInput;
    Expenses?: ExpensesOrderByRelationAggregateInput;
}
