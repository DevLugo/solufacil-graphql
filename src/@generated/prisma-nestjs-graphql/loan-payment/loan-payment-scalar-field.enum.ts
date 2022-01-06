import { registerEnumType } from '@nestjs/graphql';

export enum LoanPaymentScalarFieldEnum {
    id = "id",
    numeration = "numeration",
    amount = "amount",
    status = "status",
    paidDate = "paidDate",
    dueDate = "dueDate",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    loanId = "loanId"
}


registerEnumType(LoanPaymentScalarFieldEnum, { name: 'LoanPaymentScalarFieldEnum', description: undefined })
