import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import { CommissionGoalType } from '../prisma/commission-goal-type.enum';
import { CommissionType } from '../prisma/commission-type.enum';

@InputType()
export class ComissionPaymentConfigurationCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EmployeesTypes, {nullable:false})
    employeeType!: keyof typeof EmployeesTypes;

    @Field(() => String, {nullable:false})
    loantypeId!: string;

    @Field(() => CommissionGoalType, {nullable:false})
    commissionGoalType!: keyof typeof CommissionGoalType;

    @Field(() => CommissionType, {nullable:false})
    commissionType!: keyof typeof CommissionType;
}
