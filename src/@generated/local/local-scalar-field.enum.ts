import { registerEnumType } from '@nestjs/graphql';

export enum LocalScalarFieldEnum {
    id = "id",
    name = "name",
    address = "address",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    borrowerId = "borrowerId"
}


registerEnumType(LocalScalarFieldEnum, { name: 'LocalScalarFieldEnum', description: undefined })
