import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationWhereInput } from './comission-payment-configuration-where.input';
import { ComissionPaymentConfigurationOrderByWithRelationInput } from './comission-payment-configuration-order-by-with-relation.input';
import { ComissionPaymentConfigurationWhereUniqueInput } from './comission-payment-configuration-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComissionPaymentConfigurationCountAggregateInput } from './comission-payment-configuration-count-aggregate.input';
import { ComissionPaymentConfigurationMinAggregateInput } from './comission-payment-configuration-min-aggregate.input';
import { ComissionPaymentConfigurationMaxAggregateInput } from './comission-payment-configuration-max-aggregate.input';

@ArgsType()
export class ComissionPaymentConfigurationAggregateArgs {

    @Field(() => ComissionPaymentConfigurationWhereInput, {nullable:true})
    where?: ComissionPaymentConfigurationWhereInput;

    @Field(() => [ComissionPaymentConfigurationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ComissionPaymentConfigurationOrderByWithRelationInput>;

    @Field(() => ComissionPaymentConfigurationWhereUniqueInput, {nullable:true})
    cursor?: ComissionPaymentConfigurationWhereUniqueInput;

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
