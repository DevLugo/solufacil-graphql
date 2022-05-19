import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import { LoantypeCreateNestedOneWithoutComissionPaymentConfigurationInput } from '../loantype/loantype-create-nested-one-without-comission-payment-configuration.input';
import { CommissionGoalType } from '../prisma/commission-goal-type.enum';
import { CommissionType } from '../prisma/commission-type.enum';

@InputType()
export class ComissionPaymentConfigurationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EmployeesTypes, {nullable:false})
    employeeType!: keyof typeof EmployeesTypes;

    @Field(() => LoantypeCreateNestedOneWithoutComissionPaymentConfigurationInput, {nullable:false})
    loanType!: LoantypeCreateNestedOneWithoutComissionPaymentConfigurationInput;

    @Field(() => CommissionGoalType, {nullable:false})
    commissionGoalType!: keyof typeof CommissionGoalType;

    @Field(() => CommissionType, {nullable:false})
    commissionType!: keyof typeof CommissionType;
}
