import { registerEnumType } from '@nestjs/graphql';

export enum LoantypeScalarFieldEnum {
    id = "id",
    name = "name",
    weekDuration = "weekDuration",
    rate = "rate",
    overdueRate = "overdueRate",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(LoantypeScalarFieldEnum, { name: 'LoantypeScalarFieldEnum', description: undefined })
