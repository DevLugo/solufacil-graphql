import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import { CommissionGoalType } from '../prisma/commission-goal-type.enum';
import { CommissionType } from '../prisma/commission-type.enum';

@ObjectType()
export class ComissionPaymentConfigurationMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EmployeesTypes, {nullable:true})
    employeeType?: keyof typeof EmployeesTypes;

    @Field(() => String, {nullable:true})
    loantypeId?: string;

    @Field(() => CommissionGoalType, {nullable:true})
    commissionGoalType?: keyof typeof CommissionGoalType;

    @Field(() => CommissionType, {nullable:true})
    commissionType?: keyof typeof CommissionType;
}
