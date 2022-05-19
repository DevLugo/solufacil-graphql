import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEmployeesTypesFilter } from '../prisma/enum-employees-types-filter.input';
import { LoantypeRelationFilter } from '../loantype/loantype-relation-filter.input';
import { EnumCommissionGoalTypeFilter } from '../prisma/enum-commission-goal-type-filter.input';
import { EnumCommissionTypeFilter } from '../prisma/enum-commission-type-filter.input';

@InputType()
export class ComissionPaymentConfigurationWhereInput {

    @Field(() => [ComissionPaymentConfigurationWhereInput], {nullable:true})
    AND?: Array<ComissionPaymentConfigurationWhereInput>;

    @Field(() => [ComissionPaymentConfigurationWhereInput], {nullable:true})
    OR?: Array<ComissionPaymentConfigurationWhereInput>;

    @Field(() => [ComissionPaymentConfigurationWhereInput], {nullable:true})
    NOT?: Array<ComissionPaymentConfigurationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumEmployeesTypesFilter, {nullable:true})
    employeeType?: EnumEmployeesTypesFilter;

    @Field(() => LoantypeRelationFilter, {nullable:true})
    loanType?: LoantypeRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    loantypeId?: StringFilter;

    @Field(() => EnumCommissionGoalTypeFilter, {nullable:true})
    commissionGoalType?: EnumCommissionGoalTypeFilter;

    @Field(() => EnumCommissionTypeFilter, {nullable:true})
    commissionType?: EnumCommissionTypeFilter;
}
