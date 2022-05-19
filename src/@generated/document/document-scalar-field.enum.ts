import { registerEnumType } from '@nestjs/graphql';

export enum DocumentScalarFieldEnum {
    id = "id",
    type = "type",
    borrowerId = "borrowerId",
    avalId = "avalId",
    contractId = "contractId",
    employeeId = "employeeId"
}


registerEnumType(DocumentScalarFieldEnum, { name: 'DocumentScalarFieldEnum', description: undefined })
