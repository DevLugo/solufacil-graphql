import { registerEnumType } from '@nestjs/graphql';

export enum ExpensesScalarFieldEnum {
    id = "id",
    amountToPay = "amountToPay",
    status = "status",
    dueDate = "dueDate",
    payedAt = "payedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    employeeId = "employeeId"
}


registerEnumType(ExpensesScalarFieldEnum, { name: 'ExpensesScalarFieldEnum', description: undefined })
