import { EmployeesTypes } from './employees-types.enum';
import { NestedEnumEmployeesTypesWithAggregatesFilter } from './nested-enum-employees-types-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEmployeesTypesFilter } from './nested-enum-employees-types-filter.input';
export declare class EnumEmployeesTypesWithAggregatesFilter {
    equals?: keyof typeof EmployeesTypes;
    in?: Array<keyof typeof EmployeesTypes>;
    notIn?: Array<keyof typeof EmployeesTypes>;
    not?: NestedEnumEmployeesTypesWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumEmployeesTypesFilter;
    _max?: NestedEnumEmployeesTypesFilter;
}
