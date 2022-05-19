import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import { CommissionGoalType } from '../prisma/commission-goal-type.enum';
import { CommissionType } from '../prisma/commission-type.enum';
import { ComissionPaymentConfigurationCountAggregate } from './comission-payment-configuration-count-aggregate.output';
import { ComissionPaymentConfigurationMinAggregate } from './comission-payment-configuration-min-aggregate.output';
import { ComissionPaymentConfigurationMaxAggregate } from './comission-payment-configuration-max-aggregate.output';

@ObjectType()
export class ComissionPaymentConfigurationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => EmployeesTypes, {nullable:false})
    employeeType!: keyof typeof EmployeesTypes;

    @Field(() => String, {nullable:false})
    loantypeId!: string;

    @Field(() => CommissionGoalType, {nullable:false})
    commissionGoalType!: keyof typeof CommissionGoalType;

    @Field(() => CommissionType, {nullable:false})
    commissionType!: keyof typeof CommissionType;

    @Field(() => ComissionPaymentConfigurationCountAggregate, {nullable:true})
    _count?: ComissionPaymentConfigurationCountAggregate;

    @Field(() => ComissionPaymentConfigurationMinAggregate, {nullable:true})
    _min?: ComissionPaymentConfigurationMinAggregate;

    @Field(() => ComissionPaymentConfigurationMaxAggregate, {nullable:true})
    _max?: ComissionPaymentConfigurationMaxAggregate;
}
