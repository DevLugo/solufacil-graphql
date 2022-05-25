import { ComissionPaymentConfigurationWhereInput } from './comission-payment-configuration-where.input';
import { ComissionPaymentConfigurationOrderByWithRelationInput } from './comission-payment-configuration-order-by-with-relation.input';
import { ComissionPaymentConfigurationWhereUniqueInput } from './comission-payment-configuration-where-unique.input';
import { ComissionPaymentConfigurationCountAggregateInput } from './comission-payment-configuration-count-aggregate.input';
import { ComissionPaymentConfigurationMinAggregateInput } from './comission-payment-configuration-min-aggregate.input';
import { ComissionPaymentConfigurationMaxAggregateInput } from './comission-payment-configuration-max-aggregate.input';
export declare class ComissionPaymentConfigurationAggregateArgs {
    where?: ComissionPaymentConfigurationWhereInput;
    orderBy?: Array<ComissionPaymentConfigurationOrderByWithRelationInput>;
    cursor?: ComissionPaymentConfigurationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: ComissionPaymentConfigurationCountAggregateInput;
    _min?: ComissionPaymentConfigurationMinAggregateInput;
    _max?: ComissionPaymentConfigurationMaxAggregateInput;
}
