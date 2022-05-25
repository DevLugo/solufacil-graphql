import { CommissionPaymentWhereInput } from './commission-payment-where.input';
import { CommissionPaymentOrderByWithRelationInput } from './commission-payment-order-by-with-relation.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentScalarFieldEnum } from './commission-payment-scalar-field.enum';
export declare class FindManyCommissionPaymentArgs {
    where?: CommissionPaymentWhereInput;
    orderBy?: Array<CommissionPaymentOrderByWithRelationInput>;
    cursor?: CommissionPaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CommissionPaymentScalarFieldEnum>;
}
