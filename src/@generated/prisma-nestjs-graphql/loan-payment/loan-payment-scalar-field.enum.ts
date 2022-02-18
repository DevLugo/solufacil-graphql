import { registerEnumType } from '@nestjs/graphql';

export enum LoanPaymentScalarFieldEnum {
    id = "id",
    amount = "amount",
    date = "date",
    comments = "comments",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    loanId = "loanId",
    employeeId = "employeeId"
}


registerEnumType(LoanPaymentScalarFieldEnum, { name: 'LoanPaymentScalarFieldEnum', description: undefined })
