import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeesTypes } from './employees-types.enum';
import { NestedEnumEmployeesTypesFilter } from './nested-enum-employees-types-filter.input';

@InputType()
export class EnumEmployeesTypesFilter {

    @Field(() => EmployeesTypes, {nullable:true})
    equals?: keyof typeof EmployeesTypes;

    @Field(() => [EmployeesTypes], {nullable:true})
    in?: Array<keyof typeof EmployeesTypes>;

    @Field(() => [EmployeesTypes], {nullable:true})
    notIn?: Array<keyof typeof EmployeesTypes>;

    @Field(() => NestedEnumEmployeesTypesFilter, {nullable:true})
    not?: NestedEnumEmployeesTypesFilter;
}
