import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeScalarFieldEnum {
    id = "id",
    type = "type",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}


registerEnumType(EmployeeScalarFieldEnum, { name: 'EmployeeScalarFieldEnum', description: undefined })
