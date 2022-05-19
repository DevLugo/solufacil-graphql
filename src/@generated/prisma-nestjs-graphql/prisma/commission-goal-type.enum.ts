import { registerEnumType } from '@nestjs/graphql';

export enum CommissionGoalType {
    NEW_LOAN = "NEW_LOAN",
    PAYMENT_RECEIVED = "PAYMENT_RECEIVED"
}


registerEnumType(CommissionGoalType, { name: 'CommissionGoalType', description: undefined })
