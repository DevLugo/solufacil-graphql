import { registerEnumType } from '@nestjs/graphql';

export enum AvalScalarFieldEnum {
    id = "id",
    email = "email",
    fullName = "fullName",
    firstName = "firstName",
    lastName = "lastName",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AvalScalarFieldEnum, { name: 'AvalScalarFieldEnum', description: undefined })
