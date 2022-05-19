import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ComissionPaymentConfigurationCountOrderByAggregateInput } from './comission-payment-configuration-count-order-by-aggregate.input';
import { ComissionPaymentConfigurationMaxOrderByAggregateInput } from './comission-payment-configuration-max-order-by-aggregate.input';
import { ComissionPaymentConfigurationMinOrderByAggregateInput } from './comission-payment-configuration-min-order-by-aggregate.input';

@InputType()
export class ComissionPaymentConfigurationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    loantypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commissionGoalType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commissionType?: keyof typeof SortOrder;

    @Field(() => ComissionPaymentConfigurationCountOrderByAggregateInput, {nullable:true})
    _count?: ComissionPaymentConfigurationCountOrderByAggregateInput;

    @Field(() => ComissionPaymentConfigurationMaxOrderByAggregateInput, {nullable:true})
    _max?: ComissionPaymentConfigurationMaxOrderByAggregateInput;

    @Field(() => ComissionPaymentConfigurationMinOrderByAggregateInput, {nullable:true})
    _min?: ComissionPaymentConfigurationMinOrderByAggregateInput;
}
