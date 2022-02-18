import { registerEnumType } from '@nestjs/graphql';

export enum PaymentScheduleScalarFieldEnum {
    id = "id",
    numeration = "numeration",
    amountToPay = "amountToPay",
    paidAmount = "paidAmount",
    status = "status",
    delayed = "delayed",
    dueDate = "dueDate",
    details = "details",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    loanId = "loanId"
}


registerEnumType(PaymentScheduleScalarFieldEnum, { name: 'PaymentScheduleScalarFieldEnum', description: undefined })
