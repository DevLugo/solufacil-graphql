import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { LoanPaymentOrderByRelationAggregateInput } from '../loan-payment/loan-payment-order-by-relation-aggregate.input';
import { ContractOrderByWithRelationInput } from '../contract/contract-order-by-with-relation.input';

@InputType()
export class LoanOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    status?: keyof typeof SortOrder;

    @Field(() => LoanPaymentOrderByRelationAggregateInput, {nullable:true})
    payments?: LoanPaymentOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ContractOrderByWithRelationInput, {nullable:true})
    Contract?: ContractOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    contractId?: keyof typeof SortOrder;
}
