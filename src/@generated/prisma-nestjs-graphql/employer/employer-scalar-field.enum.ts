import { registerEnumType } from '@nestjs/graphql';

export enum EmployerScalarFieldEnum {
    id = "id",
    type = "type",
    email = "email",
    fullName = "fullName",
    firstName = "firstName",
    lastName = "lastName",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EmployerScalarFieldEnum, { name: 'EmployerScalarFieldEnum', description: undefined })
