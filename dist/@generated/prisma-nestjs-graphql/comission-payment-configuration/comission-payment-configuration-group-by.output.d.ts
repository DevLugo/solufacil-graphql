import { EmployeesTypes } from '../prisma/employees-types.enum';
import { CommissionGoalType } from '../prisma/commission-goal-type.enum';
import { CommissionType } from '../prisma/commission-type.enum';
import { ComissionPaymentConfigurationCountAggregate } from './comission-payment-configuration-count-aggregate.output';
import { ComissionPaymentConfigurationMinAggregate } from './comission-payment-configuration-min-aggregate.output';
import { ComissionPaymentConfigurationMaxAggregate } from './comission-payment-configuration-max-aggregate.output';
export declare class ComissionPaymentConfigurationGroupBy {
    id: string;
    employeeType: keyof typeof EmployeesTypes;
    loantypeId: string;
    commissionGoalType: keyof typeof CommissionGoalType;
    commissionType: keyof typeof CommissionType;
    _count?: ComissionPaymentConfigurationCountAggregate;
    _min?: ComissionPaymentConfigurationMinAggregate;
    _max?: ComissionPaymentConfigurationMaxAggregate;
}
