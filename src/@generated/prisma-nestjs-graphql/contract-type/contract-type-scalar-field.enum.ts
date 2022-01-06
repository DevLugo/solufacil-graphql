import { registerEnumType } from '@nestjs/graphql';

export enum ContractTypeScalarFieldEnum {
    id = "id",
    name = "name",
    weekDuration = "weekDuration",
    amount = "amount",
    rate = "rate",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ContractTypeScalarFieldEnum, { name: 'ContractTypeScalarFieldEnum', description: undefined })
