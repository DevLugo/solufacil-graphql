import { registerEnumType } from '@nestjs/graphql';

export enum BorrowerScalarFieldEnum {
    id = "id",
    name = "name",
    address = "address",
    email = "email",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BorrowerScalarFieldEnum, { name: 'BorrowerScalarFieldEnum', description: undefined })
