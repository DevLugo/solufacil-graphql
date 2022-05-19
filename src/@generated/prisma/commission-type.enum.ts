import { registerEnumType } from '@nestjs/graphql';

export enum CommissionType {
    FIXED_AMOUNT = "FIXED_AMOUNT",
    PERCENTAGE = "PERCENTAGE"
}


registerEnumType(CommissionType, { name: 'CommissionType', description: undefined })
