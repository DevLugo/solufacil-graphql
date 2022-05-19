import { registerEnumType } from '@nestjs/graphql';

export enum SystemSectionScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SystemSectionScalarFieldEnum, { name: 'SystemSectionScalarFieldEnum', description: undefined })
