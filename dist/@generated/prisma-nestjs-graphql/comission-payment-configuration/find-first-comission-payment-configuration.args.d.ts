import { ComissionPaymentConfigurationWhereInput } from './comission-payment-configuration-where.input';
import { ComissionPaymentConfigurationOrderByWithRelationInput } from './comission-payment-configuration-order-by-with-relation.input';
import { ComissionPaymentConfigurationWhereUniqueInput } from './comission-payment-configuration-where-unique.input';
import { ComissionPaymentConfigurationScalarFieldEnum } from './comission-payment-configuration-scalar-field.enum';
export declare class FindFirstComissionPaymentConfigurationArgs {
    where?: ComissionPaymentConfigurationWhereInput;
    orderBy?: Array<ComissionPaymentConfigurationOrderByWithRelationInput>;
    cursor?: ComissionPaymentConfigurationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ComissionPaymentConfigurationScalarFieldEnum>;
}
