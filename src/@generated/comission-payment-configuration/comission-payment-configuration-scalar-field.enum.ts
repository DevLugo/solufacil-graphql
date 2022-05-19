import { registerEnumType } from '@nestjs/graphql';

export enum ComissionPaymentConfigurationScalarFieldEnum {
    id = "id",
    employeeType = "employeeType",
    loantypeId = "loantypeId",
    commissionGoalType = "commissionGoalType",
    commissionType = "commissionType"
}


registerEnumType(ComissionPaymentConfigurationScalarFieldEnum, { name: 'ComissionPaymentConfigurationScalarFieldEnum', description: undefined })
