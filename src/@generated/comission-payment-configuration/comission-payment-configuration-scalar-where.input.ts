import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEmployeesTypesFilter } from '../prisma/enum-employees-types-filter.input';
import { EnumCommissionGoalTypeFilter } from '../prisma/enum-commission-goal-type-filter.input';
import { EnumCommissionTypeFilter } from '../prisma/enum-commission-type-filter.input';

@InputType()
export class ComissionPaymentConfigurationScalarWhereInput {

    @Field(() => [ComissionPaymentConfigurationScalarWhereInput], {nullable:true})
    AND?: Array<ComissionPaymentConfigurationScalarWhereInput>;

    @Field(() => [ComissionPaymentConfigurationScalarWhereInput], {nullable:true})
    OR?: Array<ComissionPaymentConfigurationScalarWhereInput>;

    @Field(() => [ComissionPaymentConfigurationScalarWhereInput], {nullable:true})
    NOT?: Array<ComissionPaymentConfigurationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumEmployeesTypesFilter, {nullable:true})
    employeeType?: EnumEmployeesTypesFilter;

    @Field(() => StringFilter, {nullable:true})
    loantypeId?: StringFilter;

    @Field(() => EnumCommissionGoalTypeFilter, {nullable:true})
    commissionGoalType?: EnumCommissionGoalTypeFilter;

    @Field(() => EnumCommissionTypeFilter, {nullable:true})
    commissionType?: EnumCommissionTypeFilter;
}
