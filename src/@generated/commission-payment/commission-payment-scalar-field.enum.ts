import { registerEnumType } from '@nestjs/graphql';

export enum CommissionPaymentScalarFieldEnum {
    id = "id",
    amount = "amount",
    loanId = "loanId",
    paymentScheduleId = "paymentScheduleId",
    employeeId = "employeeId",
    status = "status"
}


registerEnumType(CommissionPaymentScalarFieldEnum, { name: 'CommissionPaymentScalarFieldEnum', description: undefined })
