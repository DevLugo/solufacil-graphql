import { registerEnumType } from '@nestjs/graphql';

export enum PhoneScalarFieldEnum {
    id = "id",
    number = "number",
    borrowerId = "borrowerId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    avalId = "avalId",
    employeeId = "employeeId"
}


registerEnumType(PhoneScalarFieldEnum, { name: 'PhoneScalarFieldEnum', description: undefined })
