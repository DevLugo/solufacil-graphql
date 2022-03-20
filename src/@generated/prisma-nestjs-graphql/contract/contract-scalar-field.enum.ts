import { registerEnumType } from '@nestjs/graphql';

export enum ContractScalarFieldEnum {
    id = "id",
    borrowerId = "borrowerId",
    createdAt = "createdAt",
    dueDate = "dueDate",
    signDate = "signDate",
    updatedAt = "updatedAt",
    employeeId = "employeeId",
    contractTypeId = "contractTypeId"
}


registerEnumType(ContractScalarFieldEnum, { name: 'ContractScalarFieldEnum', description: undefined })
