import { ComissionPaymentConfigurationWhereInput } from './comission-payment-configuration-where.input';
import { ComissionPaymentConfigurationOrderByWithAggregationInput } from './comission-payment-configuration-order-by-with-aggregation.input';
import { ComissionPaymentConfigurationScalarFieldEnum } from './comission-payment-configuration-scalar-field.enum';
import { ComissionPaymentConfigurationScalarWhereWithAggregatesInput } from './comission-payment-configuration-scalar-where-with-aggregates.input';
import { ComissionPaymentConfigurationCountAggregateInput } from './comission-payment-configuration-count-aggregate.input';
import { ComissionPaymentConfigurationMinAggregateInput } from './comission-payment-configuration-min-aggregate.input';
import { ComissionPaymentConfigurationMaxAggregateInput } from './comission-payment-configuration-max-aggregate.input';
export declare class ComissionPaymentConfigurationGroupByArgs {
    where?: ComissionPaymentConfigurationWhereInput;
    orderBy?: Array<ComissionPaymentConfigurationOrderByWithAggregationInput>;
    by: Array<keyof typeof ComissionPaymentConfigurationScalarFieldEnum>;
    having?: ComissionPaymentConfigurationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ComissionPaymentConfigurationCountAggregateInput;
    _min?: ComissionPaymentConfigurationMinAggregateInput;
    _max?: ComissionPaymentConfigurationMaxAggregateInput;
}
