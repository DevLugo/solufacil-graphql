import { registerEnumType } from '@nestjs/graphql';

export enum LoanScalarFieldEnum {
    id = "id",
    status = "status",
    weeklyPaymentAmount = "weeklyPaymentAmount",
    amountToPay = "amountToPay",
    signDate = "signDate",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    contractId = "contractId",
    loantypeId = "loantypeId",
    employeeId = "employeeId"
}


registerEnumType(LoanScalarFieldEnum, { name: 'LoanScalarFieldEnum', description: undefined })
