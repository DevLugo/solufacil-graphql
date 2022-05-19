import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { LoanOrderByWithRelationInput } from '../loan/loan-order-by-with-relation.input';
import { LoanPaymentOrderByRelationAggregateInput } from '../loan-payment/loan-payment-order-by-relation-aggregate.input';
import { CommissionPaymentOrderByRelationAggregateInput } from '../commission-payment/commission-payment-order-by-relation-aggregate.input';

@InputType()
export class PaymentScheduleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    numeration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amountToPay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paidAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    returnToCapital?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profit?: keyof typeof SortOrder;

    @HideField()
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delayed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dueDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    details?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => LoanOrderByWithRelationInput, {nullable:true})
    loan?: LoanOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    loanId?: keyof typeof SortOrder;

    @Field(() => LoanPaymentOrderByRelationAggregateInput, {nullable:true})
    loanPayments?: LoanPaymentOrderByRelationAggregateInput;

    @Field(() => CommissionPaymentOrderByRelationAggregateInput, {nullable:true})
    CommissionPayment?: CommissionPaymentOrderByRelationAggregateInput;
}