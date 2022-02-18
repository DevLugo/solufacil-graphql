import { registerEnumType } from '@nestjs/graphql';

export enum EmployeesTypes {
    EJECUTIVO_DE_ENLACE = "EJECUTIVO_DE_ENLACE"
}


registerEnumType(EmployeesTypes, { name: 'EmployeesTypes', description: undefined })
