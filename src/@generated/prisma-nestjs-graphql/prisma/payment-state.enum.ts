import { registerEnumType } from '@nestjs/graphql';

export enum PaymentState {
    PENDING = "PENDING",
    DELAYED = "DELAYED",
    PAID_OUT = "PAID_OUT"
}


registerEnumType(PaymentState, { name: 'PaymentState', description: undefined })
