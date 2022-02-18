import { registerEnumType } from '@nestjs/graphql';

export enum ContractScalarFieldEnum {
    id = "id",
    amount = "amount",
    borrowerId = "borrowerId",
    createdAt = "createdAt",
    dueDate = "dueDate",
    signDate = "signDate",
    updatedAt = "updatedAt",
    employeeId = "employeeId"
}


registerEnumType(ContractScalarFieldEnum, { name: 'ContractScalarFieldEnum', description: undefined })
