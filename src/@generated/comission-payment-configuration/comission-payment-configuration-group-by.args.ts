import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationWhereInput } from './comission-payment-configuration-where.input';
import { ComissionPaymentConfigurationOrderByWithAggregationInput } from './comission-payment-configuration-order-by-with-aggregation.input';
import { ComissionPaymentConfigurationScalarFieldEnum } from './comission-payment-configuration-scalar-field.enum';
import { ComissionPaymentConfigurationScalarWhereWithAggregatesInput } from './comission-payment-configuration-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ComissionPaymentConfigurationCountAggregateInput } from './comission-payment-configuration-count-aggregate.input';
import { ComissionPaymentConfigurationMinAggregateInput } from './comission-payment-configuration-min-aggregate.input';
import { ComissionPaymentConfigurationMaxAggregateInput } from './comission-payment-configuration-max-aggregate.input';

@ArgsType()
export class ComissionPaymentConfigurationGroupByArgs {

    @Field(() => ComissionPaymentConfigurationWhereInput, {nullable:true})
    where?: ComissionPaymentConfigurationWhereInput;

    @Field(() => [ComissionPaymentConfigurationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ComissionPaymentConfigurationOrderByWithAggregationInput>;

    @Field(() => [ComissionPaymentConfigurationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ComissionPaymentConfigurationScalarFieldEnum>;

    @Field(() => ComissionPaymentConfigurationScalarWhereWithAggregatesInput, {nullable:true})
    having?: ComissionPaymentConfigurationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ComissionPaymentConfigurationCountAggregateInput, {nullable:true})
    _count?: ComissionPaymentConfigurationCountAggregateInput;

    @Field(() => ComissionPaymentConfigurationMinAggregateInput, {nullable:true})
    _min?: ComissionPaymentConfigurationMinAggregateInput;

    @Field(() => ComissionPaymentConfigurationMaxAggregateInput, {nullable:true})
    _max?: ComissionPaymentConfigurationMaxAggregateInput;
}
