import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import { Loantype } from '../loantype/loantype.model';
import { CommissionGoalType } from '../prisma/commission-goal-type.enum';
import { CommissionType } from '../prisma/commission-type.enum';

@ObjectType()
export class ComissionPaymentConfiguration {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => EmployeesTypes, {nullable:false})
    employeeType!: keyof typeof EmployeesTypes;

    @Field(() => Loantype, {nullable:false})
    loanType?: Loantype;

    @Field(() => String, {nullable:false})
    loantypeId!: string;

    @Field(() => CommissionGoalType, {nullable:false})
    commissionGoalType!: keyof typeof CommissionGoalType;

    @Field(() => CommissionType, {nullable:false})
    commissionType!: keyof typeof CommissionType;
}
