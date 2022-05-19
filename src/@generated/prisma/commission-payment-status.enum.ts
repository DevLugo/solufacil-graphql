import { registerEnumType } from '@nestjs/graphql';

export enum CommissionPaymentStatus {
    PAID_OUT = "PAID_OUT",
    PENDING = "PENDING",
    REJECTED = "REJECTED"
}


registerEnumType(CommissionPaymentStatus, { name: 'CommissionPaymentStatus', description: undefined })
