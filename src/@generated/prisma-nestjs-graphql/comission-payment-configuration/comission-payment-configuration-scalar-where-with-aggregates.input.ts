import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumEmployeesTypesWithAggregatesFilter } from '../prisma/enum-employees-types-with-aggregates-filter.input';
import { EnumCommissionGoalTypeWithAggregatesFilter } from '../prisma/enum-commission-goal-type-with-aggregates-filter.input';
import { EnumCommissionTypeWithAggregatesFilter } from '../prisma/enum-commission-type-with-aggregates-filter.input';

@InputType()
export class ComissionPaymentConfigurationScalarWhereWithAggregatesInput {

    @Field(() => [ComissionPaymentConfigurationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ComissionPaymentConfigurationScalarWhereWithAggregatesInput>;

    @Field(() => [ComissionPaymentConfigurationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ComissionPaymentConfigurationScalarWhereWithAggregatesInput>;

    @Field(() => [ComissionPaymentConfigurationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ComissionPaymentConfigurationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumEmployeesTypesWithAggregatesFilter, {nullable:true})
    employeeType?: EnumEmployeesTypesWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    loantypeId?: StringWithAggregatesFilter;

    @Field(() => EnumCommissionGoalTypeWithAggregatesFilter, {nullable:true})
    commissionGoalType?: EnumCommissionGoalTypeWithAggregatesFilter;

    @Field(() => EnumCommissionTypeWithAggregatesFilter, {nullable:true})
    commissionType?: EnumCommissionTypeWithAggregatesFilter;
}
