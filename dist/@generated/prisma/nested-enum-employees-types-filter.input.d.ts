import { EmployeesTypes } from './employees-types.enum';
export declare class NestedEnumEmployeesTypesFilter {
    equals?: keyof typeof EmployeesTypes;
    in?: Array<keyof typeof EmployeesTypes>;
    notIn?: Array<keyof typeof EmployeesTypes>;
    not?: NestedEnumEmployeesTypesFilter;
}
