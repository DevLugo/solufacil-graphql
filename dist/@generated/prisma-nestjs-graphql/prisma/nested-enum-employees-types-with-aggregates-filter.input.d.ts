import { EmployeesTypes } from './employees-types.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEmployeesTypesFilter } from './nested-enum-employees-types-filter.input';
export declare class NestedEnumEmployeesTypesWithAggregatesFilter {
    equals?: keyof typeof EmployeesTypes;
    in?: Array<keyof typeof EmployeesTypes>;
    notIn?: Array<keyof typeof EmployeesTypes>;
    not?: NestedEnumEmployeesTypesWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumEmployeesTypesFilter;
    _max?: NestedEnumEmployeesTypesFilter;
}
