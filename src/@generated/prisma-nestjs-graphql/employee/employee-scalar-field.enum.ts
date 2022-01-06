import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeScalarFieldEnum {
    id = "id",
    type = "type",
    email = "email",
    fullName = "fullName",
    firstName = "firstName",
    lastName = "lastName",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EmployeeScalarFieldEnum, { name: 'EmployeeScalarFieldEnum', description: undefined })
