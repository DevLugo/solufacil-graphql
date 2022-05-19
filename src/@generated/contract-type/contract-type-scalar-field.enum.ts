import { registerEnumType } from '@nestjs/graphql';

export enum ContractTypeScalarFieldEnum {
    id = "id",
    name = "name",
    monthDuration = "monthDuration",
    amount = "amount",
    maxRate = "maxRate",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ContractTypeScalarFieldEnum, { name: 'ContractTypeScalarFieldEnum', description: undefined })
