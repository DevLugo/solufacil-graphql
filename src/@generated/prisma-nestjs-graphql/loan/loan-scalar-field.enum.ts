import { registerEnumType } from '@nestjs/graphql';

export enum LoanScalarFieldEnum {
    id = "id",
    status = "status",
    amount = "amount",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    contractId = "contractId"
}


registerEnumType(LoanScalarFieldEnum, { name: 'LoanScalarFieldEnum', description: undefined })
