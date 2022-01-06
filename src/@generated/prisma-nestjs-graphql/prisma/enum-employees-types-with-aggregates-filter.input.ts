import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeesTypes } from './employees-types.enum';
import { NestedEnumEmployeesTypesWithAggregatesFilter } from './nested-enum-employees-types-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEmployeesTypesFilter } from './nested-enum-employees-types-filter.input';

@InputType()
export class EnumEmployeesTypesWithAggregatesFilter {

    @Field(() => EmployeesTypes, {nullable:true})
    equals?: keyof typeof EmployeesTypes;

    @Field(() => [EmployeesTypes], {nullable:true})
    in?: Array<keyof typeof EmployeesTypes>;

    @Field(() => [EmployeesTypes], {nullable:true})
    notIn?: Array<keyof typeof EmployeesTypes>;

    @Field(() => NestedEnumEmployeesTypesWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEmployeesTypesWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEmployeesTypesFilter, {nullable:true})
    _min?: NestedEnumEmployeesTypesFilter;

    @Field(() => NestedEnumEmployeesTypesFilter, {nullable:true})
    _max?: NestedEnumEmployeesTypesFilter;
}
