import { registerEnumType } from '@nestjs/graphql';

export enum CustomerScalarFieldEnum {
    id = "id",
    name = "name",
    logo = "logo",
    url = "url",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CustomerScalarFieldEnum, { name: 'CustomerScalarFieldEnum', description: undefined })
