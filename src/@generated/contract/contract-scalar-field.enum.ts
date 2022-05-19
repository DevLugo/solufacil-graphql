import { registerEnumType } from '@nestjs/graphql';

export enum ContractScalarFieldEnum {
    id = "id",
    borrowerId = "borrowerId",
    createdAt = "createdAt",
    dueDate = "dueDate",
    signDate = "signDate",
    updatedAt = "updatedAt",
    contractTypeId = "contractTypeId",
    loanLeadId = "loanLeadId",
    employeeId = "employeeId"
}


registerEnumType(ContractScalarFieldEnum, { name: 'ContractScalarFieldEnum', description: undefined })
