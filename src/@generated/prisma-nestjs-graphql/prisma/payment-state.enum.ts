import { registerEnumType } from '@nestjs/graphql';

export enum PaymentState {
    PENDING = "PENDING",
    PAID_OUT = "PAID_OUT",
    PARTIALLY_PAID = "PARTIALLY_PAID"
}


registerEnumType(PaymentState, { name: 'PaymentState', description: undefined })
