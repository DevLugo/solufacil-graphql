import { registerEnumType } from '@nestjs/graphql';

export enum ContractTypeScalarFieldEnum {
    id = "id",
    name = "name",
    monthDuration = "monthDuration",
    amount = "amount",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ContractTypeScalarFieldEnum, { name: 'ContractTypeScalarFieldEnum', description: undefined })
