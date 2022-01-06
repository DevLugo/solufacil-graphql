import { registerEnumType } from '@nestjs/graphql';

export enum LoanState {
    REQUESTED = "REQUESTED",
    IN_REVIEW = "IN_REVIEW",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    PAID_OUT = "PAID_OUT"
}


registerEnumType(LoanState, { name: 'LoanState', description: undefined })
