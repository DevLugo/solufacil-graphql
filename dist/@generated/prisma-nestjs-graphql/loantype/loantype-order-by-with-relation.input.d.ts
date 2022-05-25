import { SortOrder } from '../prisma/sort-order.enum';
import { LoanOrderByRelationAggregateInput } from '../loan/loan-order-by-relation-aggregate.input';
import { ComissionPaymentConfigurationOrderByRelationAggregateInput } from '../comission-payment-configuration/comission-payment-configuration-order-by-relation-aggregate.input';
export declare class LoantypeOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    weekDuration?: keyof typeof SortOrder;
    rate?: keyof typeof SortOrder;
    overdueRate?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    Loan?: LoanOrderByRelationAggregateInput;
    ComissionPaymentConfiguration?: ComissionPaymentConfigurationOrderByRelationAggregateInput;
}
