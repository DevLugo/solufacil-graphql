import { registerEnumType } from '@nestjs/graphql';

export enum LogScalarFieldEnum {
    id = "id",
    requestBody = "requestBody",
    requestType = "requestType",
    deviceType = "deviceType",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    systemSectionId = "systemSectionId"
}


registerEnumType(LogScalarFieldEnum, { name: 'LogScalarFieldEnum', description: undefined })
