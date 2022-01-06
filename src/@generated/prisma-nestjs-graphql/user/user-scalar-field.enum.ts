import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    fullName = "fullName",
    firstName = "firstName",
    lastName = "lastName",
    password = "password",
    lastLogin = "lastLogin",
    profilePicture = "profilePicture",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
