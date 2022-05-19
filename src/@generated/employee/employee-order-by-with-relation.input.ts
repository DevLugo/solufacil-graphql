import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PhoneOrderByRelationAggregateInput } from '../phone/phone-order-by-relation-aggregate.input';
import { DocumentOrderByRelationAggregateInput } from '../document/document-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { HideField } from '@nestjs/graphql';
import { LoanOrderByRelationAggregateInput } from '../loan/loan-order-by-relation-aggregate.input';
import { LoanPaymentOrderByRelationAggregateInput } from '../loan-payment/loan-payment-order-by-relation-aggregate.input';
import { CommissionPaymentOrderByRelationAggregateInput } from '../commission-payment/commission-payment-order-by-relation-aggregate.input';
import { ContractOrderByRelationAggregateInput } from '../contract/contract-order-by-relation-aggregate.input';
import { ExpensesOrderByRelationAggregateInput } from '../expenses/expenses-order-by-relation-aggregate.input';

@InputType()
export class EmployeeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => PhoneOrderByRelationAggregateInput, {nullable:true})
    phones?: PhoneOrderByRelationAggregateInput;

    @Field(() => DocumentOrderByRelationAggregateInput, {nullable:true})
    documents?: DocumentOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => LoanOrderByRelationAggregateInput, {nullable:true})
    loan?: LoanOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => LoanPaymentOrderByRelationAggregateInput, {nullable:true})
    loanPayment?: LoanPaymentOrderByRelationAggregateInput;

    @Field(() => CommissionPaymentOrderByRelationAggregateInput, {nullable:true})
    commissionPayment?: CommissionPaymentOrderByRelationAggregateInput;

    @Field(() => ContractOrderByRelationAggregateInput, {nullable:true})
    contractEmployee?: ContractOrderByRelationAggregateInput;

    @Field(() => ContractOrderByRelationAggregateInput, {nullable:true})
    contractLoanLead?: ContractOrderByRelationAggregateInput;

    @Field(() => ExpensesOrderByRelationAggregateInput, {nullable:true})
    Expenses?: ExpensesOrderByRelationAggregateInput;
}
