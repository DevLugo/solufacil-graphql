import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LoanOrderByRelationAggregateInput } from '../loan/loan-order-by-relation-aggregate.input';
import { ComissionPaymentConfigurationOrderByRelationAggregateInput } from '../comission-payment-configuration/comission-payment-configuration-order-by-relation-aggregate.input';

@InputType()
export class LoantypeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weekDuration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    overdueRate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => LoanOrderByRelationAggregateInput, {nullable:true})
    Loan?: LoanOrderByRelationAggregateInput;

    @Field(() => ComissionPaymentConfigurationOrderByRelationAggregateInput, {nullable:true})
    ComissionPaymentConfiguration?: ComissionPaymentConfigurationOrderByRelationAggregateInput;
}
