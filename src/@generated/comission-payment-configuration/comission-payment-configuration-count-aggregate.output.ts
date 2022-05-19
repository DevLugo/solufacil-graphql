import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ComissionPaymentConfigurationCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    employeeType!: number;

    @Field(() => Int, {nullable:false})
    loantypeId!: number;

    @Field(() => Int, {nullable:false})
    commissionGoalType!: number;

    @Field(() => Int, {nullable:false})
    commissionType!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
