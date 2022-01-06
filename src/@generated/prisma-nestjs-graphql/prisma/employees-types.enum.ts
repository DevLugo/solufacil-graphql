import { registerEnumType } from '@nestjs/graphql';

export enum EmployeesTypes {
    COMMERCIAL_HOLDER = "COMMERCIAL_HOLDER",
    COMMERCIAL_SUPPORT = "COMMERCIAL_SUPPORT",
    ADMINISTRATION_HEAD = "ADMINISTRATION_HEAD",
    COMMERCIAL_ASSISTENT = "COMMERCIAL_ASSISTENT",
    ADMINISTRATION_SUPPORT = "ADMINISTRATION_SUPPORT"
}


registerEnumType(EmployeesTypes, { name: 'EmployeesTypes', description: undefined })
