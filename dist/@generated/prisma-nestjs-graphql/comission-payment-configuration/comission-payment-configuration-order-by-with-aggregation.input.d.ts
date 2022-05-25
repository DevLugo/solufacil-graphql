import { SortOrder } from '../prisma/sort-order.enum';
import { ComissionPaymentConfigurationCountOrderByAggregateInput } from './comission-payment-configuration-count-order-by-aggregate.input';
import { ComissionPaymentConfigurationMaxOrderByAggregateInput } from './comission-payment-configuration-max-order-by-aggregate.input';
import { ComissionPaymentConfigurationMinOrderByAggregateInput } from './comission-payment-configuration-min-order-by-aggregate.input';
export declare class ComissionPaymentConfigurationOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    employeeType?: keyof typeof SortOrder;
    loantypeId?: keyof typeof SortOrder;
    commissionGoalType?: keyof typeof SortOrder;
    commissionType?: keyof typeof SortOrder;
    _count?: ComissionPaymentConfigurationCountOrderByAggregateInput;
    _max?: ComissionPaymentConfigurationMaxOrderByAggregateInput;
    _min?: ComissionPaymentConfigurationMinOrderByAggregateInput;
}
