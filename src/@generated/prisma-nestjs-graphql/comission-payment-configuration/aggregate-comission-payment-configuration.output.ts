import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ComissionPaymentConfigurationCountAggregate } from './comission-payment-configuration-count-aggregate.output';
import { ComissionPaymentConfigurationMinAggregate } from './comission-payment-configuration-min-aggregate.output';
import { ComissionPaymentConfigurationMaxAggregate } from './comission-payment-configuration-max-aggregate.output';

@ObjectType()
export class AggregateComissionPaymentConfiguration {

    @Field(() => ComissionPaymentConfigurationCountAggregate, {nullable:true})
    _count?: ComissionPaymentConfigurationCountAggregate;

    @Field(() => ComissionPaymentConfigurationMinAggregate, {nullable:true})
    _min?: ComissionPaymentConfigurationMinAggregate;

    @Field(() => ComissionPaymentConfigurationMaxAggregate, {nullable:true})
    _max?: ComissionPaymentConfigurationMaxAggregate;
}
