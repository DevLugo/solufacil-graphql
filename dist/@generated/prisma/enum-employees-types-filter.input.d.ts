import { EmployeesTypes } from './employees-types.enum';
import { NestedEnumEmployeesTypesFilter } from './nested-enum-employees-types-filter.input';
export declare class EnumEmployeesTypesFilter {
    equals?: keyof typeof EmployeesTypes;
    in?: Array<keyof typeof EmployeesTypes>;
    notIn?: Array<keyof typeof EmployeesTypes>;
    not?: NestedEnumEmployeesTypesFilter;
}
